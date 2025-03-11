let mockDb = require("../../db/products");

// let mockDb = [
//   { id: 1, name: "Fries", available: true },
//   { id: 2, name: "Big Mac", available: true },
//   { id: 3, name: "Drink", available: false },
//   { id: 4, name: "6 pc. McNuggets", available: true },
//   { id: 5, name: "12 pc. McNuggets", available: false },
//   { id: 6, name: "(New) Cheeseburger", available: false },
//   { id: 7, name: "Sundae", available: true },
// ];

// TODO: This file could be a class so we can inject the DB layer as a dependency

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

const addProduct = (params) => {
  const newProduct = {
    id: mockDb.length + 1,
    name: params.name,
    available: params.available || true,
  };
  mockDb.push(newProduct);

  return newProduct;
};

const deleteProduct = (params) => {
  const productId = parseInt(params.id);
  const productFound = mockDb.find((p) => p.id === productId);

  if (!productFound) {
    return null;
  }

  // deleting element by updating list
  mockDb = mockDb.filter((prod) => prod.id !== productId);
  return true;
};

module.exports = {
  filterProducts,
  addProduct,
  deleteProduct,
};
