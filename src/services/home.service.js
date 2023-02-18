const puppeteer = require("puppeteer");

async function scrapeTokped(input) {
  try {
    let inputArr = input.split(" ");

    let url = "https://www.tokopedia.com/search?st=product&q=";
    for (i = 0; i < inputArr.length; i++) {
      url = url + inputArr[i] + "%20";
    }
    url = url.slice(0, -3);

    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      headless: true,
    });
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.setJavaScriptEnabled(true);
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36"
    );
    await page.goto(url, { waituntil: "domcontentloaded" });
    await page.setViewport({
      width: 1200,
      height: 800,
    });

    const body = await page.evaluate(async () => {
      await new Promise((resolve) => {
        var scrollTop = -1;
        const interval = setInterval(() => {
          window.scrollBy(0, 100);
          if (document.documentElement.scrollTop !== scrollTop) {
            scrollTop = document.documentElement.scrollTop;
            return;
          }
          clearInterval(interval);
          resolve();
        }, 100);
      });

      return Array.from(document.querySelectorAll(".css-qa82pd"), (e) => {
        let nama = e.querySelector(".prd_link-product-name").innerText;
        let harga = e.querySelector(".prd_link-product-price").innerText;
        let link = e.querySelector("a.pcv3__info-content").href;

        if (harga != null && harga != "") {
          return {
            nama: nama,
            harga: harga,
            link: link,
            platform: "Tokopedia",
          };
        }
      });
    });

    await browser.close();
    return body;
  } catch (error) {
    console.error(error);
  }
}

async function scrapeLazada(input) {
  try {
    let inputArr = input.split(" ");

    let url = "https://www.lazada.co.id/tag/";
    for (i = 0; i < inputArr.length; i++) {
      url = url + inputArr[i] + "-";
    }
    url = url.slice(0, -1);

    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      headless: true,
    });
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.setJavaScriptEnabled(true);
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36"
    );
    await page.goto(url, { waituntil: "domcontentloaded" });
    await page.setViewport({
      width: 1200,
      height: 800,
    });

    const body = await page.evaluate(async () => {
      await new Promise((resolve) => {
        var scrollTop = -1;
        const interval = setInterval(() => {
          window.scrollBy(0, 100);
          if (document.documentElement.scrollTop !== scrollTop) {
            scrollTop = document.documentElement.scrollTop;
            return;
          }
          clearInterval(interval);
          resolve();
        }, 100);
      });

      return Array.from(document.querySelectorAll(".Bm3ON"), (e) => {
        let nama = e.querySelector(".RfADt a").innerText;
        let harga = e.querySelector(".aBrP0 span").innerText;
        let link = e.querySelector(".RfADt a").href;

        if (harga != null && harga != "") {
          return {
            nama: nama,
            harga: harga,
            link: link,
            platform: "Lazada",
          };
        }
      });
    });

    await browser.close();
    return body;
  } catch (error) {
    console.error(error);
  }
}

async function scrapeShopee(input) {
  try {
    let inputArr = input.split(" ");

    let url = "https://shopee.co.id/search?keyword=";
    for (i = 0; i < inputArr.length; i++) {
      url = url + inputArr[i] + "%20";
    }
    url = url.slice(0, -3);

    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      headless: true,
    });
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.setJavaScriptEnabled(true);
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36"
    );
    await page.goto(url, { waituntil: "domcontentloaded" });
    await page.setViewport({
      width: 1200,
      height: 800,
    });

    const body = await page.evaluate(async () => {
      await new Promise((resolve) => {
        var scrollTop = -1;
        const interval = setInterval(() => {
          window.scrollBy(0, 100);
          if (document.documentElement.scrollTop !== scrollTop) {
            scrollTop = document.documentElement.scrollTop;
            return;
          }
          clearInterval(interval);
          resolve();
        }, 100);
      });

      return Array.from(
        document.querySelectorAll(".shopee-search-item-result__item"),
        (e) => {
          let nama = e.querySelector(".Cve6sh").innerText;
          let harga = e.querySelector(".ZEgDH9").innerText;
          let link = e.querySelector("a").href;

          if (harga != null && harga != "") {
            return {
              nama: nama,
              harga: harga,
              link: link,
              platform: "Shopee",
            };
          }
        }
      );
    });

    await browser.close();
    return body;
  } catch (error) {
    console.error(error);
  }
}

async function scrapeBukalapak(input) {
  try {
    let inputArr = input.split(" ");

    let url = "https://www.bukalapak.com/products?search%5Bkeywords%5D=";
    for (i = 0; i < inputArr.length; i++) {
      url = url + inputArr[i] + "%20";
    }
    url = url.slice(0, -3);

    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      headless: true,
    });
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.setJavaScriptEnabled(true);
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36"
    );
    await page.goto(url, { waituntil: "domcontentloaded" });
    await page.setViewport({
      width: 1200,
      height: 800,
    });

    const body = await page.evaluate(async () => {
      await new Promise((resolve) => {
        var scrollTop = -1;
        const interval = setInterval(() => {
          window.scrollBy(0, 100);
          if (document.documentElement.scrollTop !== scrollTop) {
            scrollTop = document.documentElement.scrollTop;
            return;
          }
          clearInterval(interval);
          resolve();
        }, 100);
      });

      return Array.from(document.querySelectorAll(".te-product-card"), (e) => {
        let nama = e.querySelector(".bl-product-card-new__name p a").innerText;
        let harga = e.querySelector(
          ".bl-text--ellipsis__1.bl-product-card-new__price"
        ).innerText;
        let link = e.querySelector(".bl-product-card-new__name p a").href;

        if (harga != null && harga != "") {
          return {
            nama: nama,
            harga: harga,
            link: link,
            platform: "Bukalapak",
          };
        }
      });
    });

    await browser.close();
    return body;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  scrapeTokped,
  scrapeLazada,
  scrapeShopee,
  scrapeBukalapak,
};
