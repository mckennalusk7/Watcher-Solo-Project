const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

//    GET all Series  for profile page

router.get("/", rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "current"  ORDER BY "episodes" ASC;`;
  pool
    .query(queryText)
    .then((responseFromDb) => {
      console.log(responseFromDb.rows);
      res.send(responseFromDb.rows);
    })
    .catch((error) => {
      console.log("Get  Series Error: ", error);
      res.sendStatus(500);
    });
});

module.exports = router;
