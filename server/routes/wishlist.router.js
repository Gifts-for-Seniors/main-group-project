const express = require("express");
const pool = require("../modules/pool");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const { query } = require("../modules/pool");
const router = express.Router();

/**
 * GET ALL WISHLIST ITEMS
 */
router.get("/", (req, res) => {
  queryText = `SELECT * FROM items ORDER BY priority DESC, item ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => res.sendStatus(500));
});

/**
 * POST NEW WISHLIST ITEM
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  let newItem = req.body.item;
  let priority = req.body.priority;
  let queryText = `INSERT INTO items (item, priority)
VALUES ($1, $2);`;
  pool
    .query(queryText, [newItem, priority])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("SERVER POST ERR", error);
      res.sendStatus(500);
    });
});

/**
 * UPDATE WISHLIST ITEM
 */
router.put("/edit/:edit-item", rejectUnauthenticated, (req, res) => {
  let queryText = `UPDATE items SET "item"=$1, "priority"=$2 WHERE "id"=$3`;
  let itemId = req.params.id;
  let item = req.params.item;
  let priority = req.param.priority;

  pool
    .query(queryText, [item, priority, itemId])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("ERROR IN SERVER PUT", error);
      res.sendStatus(500);
    });
});

/**
 * UPDATE PRIORITY OF WISHLIST ITEM
 */
router.put("/update/:id", rejectUnauthenticated, (req, res) => {
  let id = req.body.id;
  let priority = req.body.priority;
  console.log(req.body.priority);
  let changeHelper = !priority;
  let queryText = `UPDATE items SET priority = $2 WHERE id=$1`;
  pool
    .query(queryText, [id, changeHelper])
    .then((result) => {
      res.sendStatus(200);
      console.log("success", result);
    })
    .catch((error) => {
      console.log("ERROR IN SERVER PUT", error);
      res.sendStatus(500);
    });
});

module.exports = router;
