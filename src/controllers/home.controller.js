const homeService = require("../services/home.service");
const count = require("../utils/count");

const fs = require("fs");

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

function get(req, res, next) {
  try {
    let dataTokped = req.cookies.dataTokped;
    let dataLazada = req.cookies.dataLazada;
    let dataShopee = req.cookies.dataShopee;
    let dataBukalapak = req.cookies.dataBukalapak;
    let linkData = req.cookies.linkData;
    if (!dataTokped) {
      dataTokped = "";
    }
    if (!dataLazada) {
      dataLazada = "";
    }
    if (!dataShopee) {
      dataShopee = "";
    }
    if (!dataBukalapak) {
      dataBukalapak = "";
    }
    if (!linkData) {
      linkData = "";
    }

    res.render("home", {
      dataTokped: dataTokped,
      dataLazada: dataLazada,
      dataShopee: dataShopee,
      dataBukalapak: dataBukalapak,
      linkData: linkData,
    });
    return;
  } catch (err) {
    console.error("Error while delivering homepage!");
    next(err);
  }
}

async function post(req, res, next) {
  try {
    // Tokopedia
    const dataTokped = await homeService.scrapeTokped(req.body.userInput);

    if (dataTokped && dataTokped.length > 0) {
      const maxTokped = count.findMax(dataTokped);
      let linkMaxTokped = dataTokped.find((o) => o.harga == maxTokped).link;

      const minTokped = count.findMin(dataTokped);
      let linkMinTokped = dataTokped.find((o) => o.harga == minTokped).link;

      const avgTokped = count.findAvg(dataTokped);

      res.cookie(
        "dataTokped",
        {
          highest: formatter.format(maxTokped).slice(0, -3),
          linkHighest: linkMaxTokped,
          lowest: formatter.format(minTokped).slice(0, -3),
          linkLowest: linkMinTokped,
          average: formatter.format(avgTokped).slice(0, -3),
        },
        { httpOnly: true }
      );
    } else {
      res.cookie(
        "dataTokped",
        {
          highest: "0",
          linkHighest: "/",
          lowest: "0",
          linkLowest: "/",
          average: "0",
        },
        { httpOnly: true }
      );
    }

    // Lazada
    const dataLazada = await homeService.scrapeLazada(req.body.userInput);

    if (dataLazada && dataLazada.length > 0) {
      const maxLazada = count.findMax(dataLazada);
      let linkMaxLazada = dataLazada.find((o) => o.harga == maxLazada).link;

      const minLazada = count.findMin(dataLazada);
      let linkMinLazada = dataLazada.find((o) => o.harga == minLazada).link;

      const avgLazada = count.findAvg(dataLazada);

      res.cookie(
        "dataLazada",
        {
          highest: formatter.format(maxLazada).slice(0, -3),
          linkHighest: linkMaxLazada,
          lowest: formatter.format(minLazada).slice(0, -3),
          linkLowest: linkMinLazada,
          average: formatter.format(avgLazada).slice(0, -3),
        },
        { httpOnly: true }
      );
    } else {
      res.cookie(
        "dataLazada",
        {
          highest: "0",
          linkHighest: "/",
          lowest: "0",
          linkLowest: "/",
          average: "0",
        },
        { httpOnly: true }
      );
    }

    // Shopee
    const dataShopee = await homeService.scrapeShopee(req.body.userInput);

    if (dataShopee && dataShopee.length > 0) {
      const maxShopee = count.findMaxShopee(dataShopee);
      let linkMaxShopee = dataShopee.find((o) => o.harga == maxShopee).link;

      const minShopee = count.findMin(dataShopee);
      let linkMinShopee = dataShopee.find((o) => o.harga == minShopee).link;

      const avgShopee = count.findAvg(dataShopee);

      res.cookie(
        "dataShopee",
        {
          highest: formatter.format(maxShopee).slice(0, -3),
          linkHighest: linkMaxShopee,
          lowest: formatter.format(minShopee).slice(0, -3),
          linkLowest: linkMinShopee,
          average: formatter.format(avgShopee).slice(0, -3),
        },
        { httpOnly: true }
      );
    } else {
      res.cookie(
        "dataShopee",
        {
          highest: "0",
          linkHighest: "/",
          lowest: "0",
          linkLowest: "/",
          average: "0",
        },
        { httpOnly: true }
      );
    }

    // Blibli
    const dataBukalapak = await homeService.scrapeBukalapak(req.body.userInput);

    if (dataBukalapak && dataBukalapak.length > 0) {
      const maxBukalapak = count.findMaxShopee(dataBukalapak);
      let linkMaxBukalapak = dataBukalapak.find(
        (o) => o.harga == maxBukalapak
      ).link;

      const minBukalapak = count.findMin(dataBukalapak);
      let linkMinBukalapak = dataBukalapak.find(
        (o) => o.harga == minBukalapak
      ).link;

      const avgBukalapak = count.findAvg(dataBukalapak);

      res.cookie(
        "dataBukalapak",
        {
          highest: formatter.format(maxBukalapak).slice(0, -3),
          linkHighest: linkMaxBukalapak,
          lowest: formatter.format(minBukalapak).slice(0, -3),
          linkLowest: linkMinBukalapak,
          average: formatter.format(avgBukalapak).slice(0, -3),
        },
        { httpOnly: true }
      );
    } else {
      res.cookie(
        "dataBukalapak",
        {
          highest: "0",
          linkHighest: "/",
          lowest: "0",
          linkLowest: "/",
          average: "0",
        },
        { httpOnly: true }
      );
    }

    const data = JSON.stringify(
      dataTokped.concat(dataLazada, dataShopee, dataBukalapak)
    );

    fs.writeFileSync("./data.json", data, (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Successfully wrote file");
      }
    });
    res.cookie("linkData", {
      link: "/createExcel",
    });
    res.redirect("/");
    return;
  } catch (err) {
    console.error("Error while delivering homepage!");
    next(err);
  }
}

module.exports = {
  get,
  post,
};
