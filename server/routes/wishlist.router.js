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
router.get("/", rejectUnauthenticated, (req, res) => {
  queryText = `SELECT * FROM items`;
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
router.post("/", (req, res) => {
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
router.put("/:edit-item", (req, res) => {
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
router.put("/:update-priority", (req, res) => {
  let priority = req.params.priority;
  let id = req.params.id;
  let queryText = `UPDATE items SET priority = !priority WHERE id=$1`;
  pool
    .query(queryText, [id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("ERROR IN SERVER PUT", error);
      res.sendStatus(500);
    });
});
module.exports = router;
