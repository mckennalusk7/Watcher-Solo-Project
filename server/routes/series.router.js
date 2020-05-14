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
      console.log(responseFromDb.rows);
      res.send(responseFromDb.rows);
    })
    .catch((error) => {
      console.log("Get All Series Error: ", error);
      res.sendStatus(500);
    });
});

// GET Route to get genre from database
router.get("/genre/:id", (req, res) => {
  const queryText = `SELECT * FROM series WHERE id=$1 GROUP BY "series.id`;
  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR in completing SELECT series query", err);
      res.sendStatus(500);
    });
});
module.exports = router;
