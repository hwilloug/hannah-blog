const express      = require('express');
const morgan       = require('morgan');

const api = express.Router();

let testData = require('../../../tests/mock-data/articles.js')

api.get('/', (req, res, next) => {
  if ( req.query.category ) {
    res.send(testData[req.query.category]);
  } else {
    res.status(400).send('Please enter a category');
  }
})

api.get('/:id', (req, res, next) => {
  // TODO
  let found = 0;
  for ( let category in testData ) {
    for ( let i in testData[category] ) {
      let article = testData[category][i];
      if ( article.id == req.params.id ) {
        found = 1;
        res.send(article)
      }
    }
  }
  if (!found) {
    res.status(404).send(`Couldn't find article with id ${req.params.id}`)
  }
})

module.exports = api;
