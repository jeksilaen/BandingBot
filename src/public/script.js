function loading() {
  document.getElementById("postBtn").innerHTML =
    '<i id="load" class="fa fa-spinner fa-spin"></i>Loading';

  setTimeout(() => {
    document.getElementById("postBtn").innerHTML =
      '<i id="load" class="fa fa-spinner fa-spin"></i>Scraping Tokopedia';
  }, 2000);

  setTimeout(() => {
    document.getElementById("postBtn").innerHTML =
      '<i id="load" class="fa fa-spinner fa-spin"></i>Scraping Lazada';
  }, 12000);

  setTimeout(() => {
    document.getElementById("postBtn").innerHTML =
      '<i id="load" class="fa fa-spinner fa-spin"></i>Scraping Shopee';
  }, 28000);

  setTimeout(() => {
    document.getElementById("postBtn").innerHTML =
      '<i id="load" class="fa fa-spinner fa-spin"></i>Scraping Bukalapak';
  }, 38000);

  setTimeout(() => {
    document.getElementById("postBtn").innerHTML =
      '<i id="load" class="fa fa-spinner fa-spin"></i>Finishing Up';
  }, 50000);
}
