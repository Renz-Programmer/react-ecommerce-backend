const express = require("express");
const cors = require("cors");
const path = require("path");

const products = require("./data/products");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Debug — shows real backend folder
console.log("DIRNAME:", __dirname);

// Serve images from backend/images folder
app.use("/images", express.static(path.join(__dirname, "images")));

// GET all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// GET categories
app.get("/api/categories", (req, res) => {
  const categories = [...new Set(products.map(p => p.category))];
  res.json(categories);
});

// ⭐ YOU WERE MISSING THIS — server won't run without it
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});