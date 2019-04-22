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
  burger.add(['name, devoured'], [req.body.name, req.body.devoured], result => {
    res.json({ id: result.insertId });
  });
});