function findMax(data) {
  const max = Math.max(
    ...data.map((o) => {
      o.harga = o.harga.slice(2);
      o.harga = o.harga.replaceAll(".", "");

      return parseInt(o.harga);
    })
  );

  return max;
}

function findMaxShopee(data) {
  const max = Math.max(
    ...data.map((o) => {
      o.harga = o.harga.replaceAll(".", "");

      return parseInt(o.harga);
    })
  );

  return max;
}

function findMin(data) {
  const min = Math.min(
    ...data.map((o) => {
      return parseInt(o.harga);
    })
  );

  return min;
}

function findAvg(data) {
  const avg =
    data.reduce((total, next) => {
      return total + parseInt(next.harga);
    }, 0) / data.length;

  return Math.round(avg);
}

module.exports = {
  findMax,
  findMaxShopee,
  findMin,
  findAvg,
};
