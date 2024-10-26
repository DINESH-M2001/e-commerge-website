const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static("client"));
app.use(cors())

// MongoDB Connection

const URI =
  "mongodb+srv://dineshm22:dinesh@cluster0.iowhx.mongodb.net/ecommerce01?retryWrites=true&w=majority&appName=project-1";

try {
  mongoose.connect(URI).then(() => console.log("MongoDB connected"));
} catch (err) {
  console.log("err");
}

//model



const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
