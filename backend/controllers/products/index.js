let mockDb = require("../../db/products");

const filterProducts = (params) => {
  let filteredProducts = mockDb;
  const { isAvailable = "", sortByCriteria = "", searchText = "" } = params;

  if (isAvailable) {
    const available = isAvailable === "true";
    filteredProducts = filteredProducts.filter(
      (product) => product.available === available,
    );
  }

  const sortBy = sortByCriteria || "id";
  filteredProducts = filteredProducts.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  if (searchText) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  }

  return filteredProducts;
};

module.exports = {
  filterProducts,
};
