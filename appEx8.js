// פהמי והבי + מאור דוד
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const { products } = require("./data");

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, price } = product;
    return { id, price };
  });
  res.json(newProducts);
});

app.get("/api/products/:productPrice", (req, res) => {
  const { productPrice } = req.params;

  const singleProduct = products.filter(
    (product) => product.price > Number(productPrice)
  );

  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }

  return res.json(singleProduct);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
