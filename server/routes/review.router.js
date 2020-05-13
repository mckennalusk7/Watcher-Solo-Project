const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

//    GET all Series  for home page

router.get("/", rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "series" ORDER BY "series" ASC;`;
  pool
    .query(queryText)
    .then((responseFromDb) => {
      res.send(responseFromDb.rows);
    })
    .catch((error) => {
      console.log("Get All Series Error: ", error);
      res.sendStatus(500);
    });
});

//    GET all Reviews

router.get("/review", rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "review" ORDER BY "review" ASC;`;
  pool
    .query(queryText)
    .then((responseFromDb) => {
      res.send(responseFromDb.rows);
    })
    .catch((error) => {
      console.log("Get All Review Error: ", error);
      res.sendStatus(500);
    });
});

module.exports = router;
