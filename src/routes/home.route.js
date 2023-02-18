const express = require("express");
const homeController = require("../controllers/home.controller");
const errorHandler = require("../middlewares/errorHandler");
const logger = require("../middlewares/logging/home.logger");
const Excel = require("exceljs");
const jwtAuth = require("../middlewares/jwtAuth");

const router = express.Router();

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

router.get(
  "/",
  logger.logPageRequest,
  jwtAuth,
  homeController.get,
  errorHandler
);

router.post("/scrape", logger.logPageSubmit, homeController.post, errorHandler);

router.get("/createExcel", function (req, res, next) {
  const workbook = new Excel.Workbook();

  try {
    const data = require("../../data.json");
    workbook.views = [
      {
        x: 0,
        y: 0,
        width: 10000,
        height: 20000,
        firstSheet: 0,
        activeTab: 1,
        visibility: "visible",
      },
    ];
    var worksheet = workbook.addWorksheet("Data E-Commerce");
    worksheet.columns = [
      { header: "Nama Produk", key: "nama", width: 20 },
      { header: "Harga", key: "harga", width: 35 },
      { header: "E-Commerce", key: "platform", width: 15 },
      { header: "Link Pembelian", key: "link", width: 45 },
    ];

    data.forEach((element) => {
      if (element !== null) {
        worksheet.addRow({
          nama: element.nama,
          harga: formatter.format(element.harga).slice(0, -3),
          platform: element.platform,
          link: element.link,
        });
      }
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" + "Data BandingBot.xlsx"
    );
    workbook.xlsx.write(res).then(function (data) {
      res.end();
      console.log("File write done........");
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
