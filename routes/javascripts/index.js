const express = require('express');
const router = express.Router();

const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

router.get('/', (req, res) => {
    res.render('index/welcome');
  });
  
  


  module.exports = router;