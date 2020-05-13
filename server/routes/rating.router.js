const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

//    GET all Ratings

router.get("/rating", rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "rating" ORDER BY "rating" ASC;`;
  pool
    .query(queryText)
    .then((responseFromDb) => {
      res.send(responseFromDb.rows);
    })
    .catch((error) => {
      console.log("Get All Rating Error: ", error);
      res.sendStatus(500);
    });
});

module.exports = router;
