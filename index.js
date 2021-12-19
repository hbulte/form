const express = require("express");
const formidableMiddleware = require("express-formidable");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use(formidableMiddleware());

const form = require("./routes/form");
app.use(form);

app.all("", async (req, res) => {
  try {
    res.json({ message: "all routes" });
  } catch (error) {}
});

app.listen(process.env.PORT, () => {
  console.log("server ON");
});
