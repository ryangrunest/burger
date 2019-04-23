const express = require('express');
const router = express.Router();

const burger = require('../models/burger.js');

router.get('/', (req, res) => {
  burger.all(data => {
    let bData = {
      burgers: data
    };
    console.log(bData);
    res.render('index', bData);
  });
});

router.post('/api/burgers', (req, res) => {
  burger.add(['NAME, DEVOURED'], [req.body.name, req.body.devoured], console.log);
  res.status(200).end();
});

router.put('/api/burgers/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;
  burger.update({
    devoured: req.body.sleepy
  }, condition, result => {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/cats/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  cat.delete(condition, result => {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;