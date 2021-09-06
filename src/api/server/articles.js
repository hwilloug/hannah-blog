const express      = require('express');
const morgan       = require('morgan');

const api = express.Router();

let testData = require('../../../tests/mock-data/articles.js')

api.get('/', (req, res, next) => {
  const categories = ['food', 'gardening', 'crafts', 'coding', 'books', 'languages']
  try {
    if ( !req.query.category ) {
      let data = []
      for (var i = 0; i < categories.length; i++) {
        for (var j = 0; j < testData[categories[i]].length; j++) {
          data.push(testData[categories[i]][j])
        }
      }
      res.send(data)
    } else if ( categories.includes(req.query.category) ) {
      res.send(testData[req.query.category]);
    } else {
      res.status.send(400).send('Invalid category')
    }
  }
  catch {
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
