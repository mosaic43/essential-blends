const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const { Pool, Client } = require('pg');
// import essentialOils from './javascripts/shop'

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

router.get('/skincare', (req, res) => {
    res.render('index/skin');
  });

router.get('/SignUp', (req, res) => {
    res.render('index/register');
  });

  router.get('/Login', (req, res) => {
    res.render('index/login');
  });

  router.get('/shop', (req, res) => {
    res.render('index/shop')
    // res.render('index/shop', {
    //     essentialOils: essentialOils
    //  });
  });

// router.post('/login', passport.authenticate('local'), users.login)

//register Post
router.post('/SignUp', (req, res) => {
    let errors = [];

    if(RegExp.body.password != req.body.password2){
    errors.push({text: 'Passwords do not match'});
    }

    if(req.body.password.length < 8) {
        errors.push({text: 'Password must be at least 8 characters'});
    }

    if(errors.length > 0){
        res.render('/register', {
            errors: errors,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            password2: req.body.password2
        });
    } else {
        res.send('success');
    }
});

  module.exports = router;