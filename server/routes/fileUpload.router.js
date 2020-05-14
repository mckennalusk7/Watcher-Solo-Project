const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.post("/api/upload", (req, res) => {
  let queryText = `SELECT "profile picture" FROM "user"`;

  pool
    .query(queryText)
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(`upload incomplete`, err);
      res.sendStatus(500);
    });
});
module.exports = router;
