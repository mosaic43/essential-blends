const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({
    extended: true 
}));
app.use(bodyParser.json({ type: 'application/json' }));


router.get('/', (req, res) => {
    res.render('index/welcome');
  });





router.get('/welcome',
  (req, res) => {
      res.render('index/myaccount')
  }
);



  module.exports = router;