const express = require("express");
require("dotenv").config();
const connectDB = require("./database/db.js");

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/api/health", (req, res) => {
  res.send("HEALTH API");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on PORT: ${PORT}`);
});
