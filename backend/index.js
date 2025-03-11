const express = require("express");
const cors = require("cors");
const productsRouter = require("./routes/products");

const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is Listening on PORT:", PORT);
});

app.use("/products", productsRouter);
