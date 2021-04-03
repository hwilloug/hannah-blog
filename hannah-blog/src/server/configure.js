const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const blog = require('./blog')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(morgan('tiny'));
  app.use(cors());
  app.use('/api/blog', blog);
}
