const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.post("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
