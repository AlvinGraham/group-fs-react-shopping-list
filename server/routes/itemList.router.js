const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET Routes
router.get("/", (req, res) => {
  // GET query Text
  const queryText = `SELECT * FROM "shopping_items" ORDER BY "purchased" ASC, "name";`;
  // DB Query
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.error("ERROR in GET DB Query:", err);
      res.sendStatus(500);
    });
});

// POST Routes

router.post("/", (req, res) => {
  console.log("req.body:", req.body);

  // POST query TEXT and Args
  const queryText = `INSERT INTO "shopping_items" ("name", "quantity", "unit", "purchased")
    VALUES ($1, $2, $3, $4);`;
  const queryArgs = [
    req.body.name,
    req.body.quantity,
    req.body.unit,
    req.body.purchased,
  ];

  //DB Query
  pool
    .query(queryText, queryArgs)
    .then((result) => {
      console.log("List Item added to DB:", req.body);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error("ERROR in POST DB Query:", err);
      res.sendStatus(500);
    });
});

// UPDATE Routes

router.put("/", (req, res) => {
  console.log("req.body", req.body, "purchasedTo", req.body.purchasedTo);
  let queryText;
  if (req.body.purchasedTo === false) {
    queryText = `UPDATE "shopping_items" SET "purchased" = false WHERE id = $1;`;
  } else {
    queryText = `UPDATE "shopping_items" SET "purchased" = true WHERE id = $1;`;
  }
  console.log("queryText", queryText);

  //  console.log(queryText);

  //DB Query
  pool
    .query(queryText, [req.body.itemID])
    .then((result) => {
      console.log(
        `List Item ${req.body.itemID} changed to purchased - ${req.body.purchasedTo}`
      );
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("ERROR in PUT DB Query:", err);
      res.sendStatus(500);
    });
});

// DELETE Routes

router.delete("/:id", (req, res) => {
  const queryText = `DELETE FROM "shopping_items" WHERE id = $1;`;

  // DB Query
  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      console.log(`List Item ${req.params.is} Deleted`);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("ERROR in DELETE DB Query:", err);
      res.sendStatus(500);
    });
});

module.exports = router;
