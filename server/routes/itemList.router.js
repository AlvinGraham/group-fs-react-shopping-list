const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET Routes
router.get('/', (req, res) => {

  // GET query Text
  const queryText = `SELECT * FROM "shopping_items" ORDER BY "name";`;  
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


// UPDATE Routes


// DELETE Routes

module.exports = router;