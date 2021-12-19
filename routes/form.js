const express = require("express");
const formidableMiddleware = require("express-formidable");
const mongoose = require("mongoose");
const router = express.Router();

router.post("/form", async (req, res) => {
  try {
    const data = req.fields;
    console.log(data);
    res.json({ message: "Well received" });
  } catch (error) {
    res.json({ error: error });
  }
});

module.exports = router;
