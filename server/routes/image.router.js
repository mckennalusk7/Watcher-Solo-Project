const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.post("/", (req, res) => {
  const imageUpload = req.body.imageUpload;

  const queryString = `INSERT INTO "WATCHING" ("profile picture") VALUES ($1) WHERE "id"=$2`;
  res.sendStatus(200);

  pool
    .query(queryString)
    .then((responseFromDb) => {
      console.log(responseFromDb.rows);
      res.send(responseFromDb.rows);
    })
    .catch((error) => {
      console.log("Get All Series Error: ", error);
      res.sendStatus(500);
    });
});

module.exports = router;
