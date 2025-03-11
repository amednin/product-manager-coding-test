const express = require("express");
const router = express.Router({ mergeParams: true });
let mockDb = require("../../db/products");
const {
  filterProducts,
  deleteProduct,
  addProduct,
} = require("../../controllers/products");

router.get("/", (req, res) => {
  const { available, sortBy, search } = req.query;
  const params = {
    isAvailable: available,
    sortByCriteria: sortBy,
    searchText: search,
  };
  const filteredProducts = filterProducts(params);

  res.json(filteredProducts);
});

// TODO: Implement and use a Controller here
router.post("/", (req, res) => {
  const newProduct = addProduct(req.body);
  res.status(201).json(newProduct);
});

// TODO: Implement and use a Controller here
router.put("/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = mockDb.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  // TODO: Implement and use a Controller here
  product.name = req.body.name !== undefined ? req.body.name : product.name;
  product.available =
    req.body.available !== undefined ? req.body.available : product.available;

  res.json(product);
});

router.delete("/:id", (req, res) => {
  const success = deleteProduct(req.params);

  if (!success) {
    // TODO: An improvement would be to send this info to a logger service
    console.log(
      "attempted to delete a non existing product with ID: ",
      req.params.id,
    );
  }

  res.status(204).send();
});

module.exports = router;
