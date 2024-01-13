const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET Routes
router.get('/', (req, res) => {

  // GET query Text
  const queryText = `SELECT * FROM "shopping_items" ORDER BY "id";`;  
  // DB Query
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.error('ERROR in GET DB Query:', err);
      res.sendStatus(500);
    });
});

// POST Routes

router.post('/', (req, res) => {
  console.log('req.body:', req.body);
  
  // POST query TEXT and Args
  const queryText = `INSERT INTO "shopping_items" ("name", "quantity", "unit", "purchased")
    VALUES ($1, $2, $3, $4);`;
  const queryArgs = [
    req.body.name,
    req.body.quantity,
    req.body.unit,
    req.body.purchased
  ];

  //DB Query
  pool.query(queryText, queryArgs)
  .then((result) => {
    console.log('List Item added to DB:', req.body);
    res.sendStatus(201);
  })
  .catch((err) => {
    console.error("ERROR in POST DB Query:", err);
    res.sendStatus(500);
  });


});


// UPDATE Routes


// DELETE Routes

module.exports = router;