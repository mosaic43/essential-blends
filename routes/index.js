const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const { Pool, Client } = require('pg');
//const essentialOils = require('./javascripts/essentialOils')
let essentialOils = [
    {name: "Lavendar", quantity: 0, price: 2},
    {name: "Tea Tree", quantity: 0, price: 2},
    {name: "Lemon Grass", quantity: 0, price: 2},
    {name: "Rosehip", quantity: 0, price: 2},
    {name: "Chamomile", quantity: 0, price: 2},
    {name: "Sandalwood", quantity: 0, price: 2},
    {name: "Clary Sage", quantity: 0, price: 2},
    {name: "Rosemary", quantity: 0, price: 2},
    {name: "Frankincense", quantity: 0, price: 2},
    {name: "Geranium", quantity: 0, price: 2},
    {name: "Neroli", quantity: 0, price: 2},
    {name: "Lemon", quantity: 0, price: 2},
    {name: "Cinnamon", quantity: 0, price: 2},
    {name: "Peppermint", quantity: 0, price: 2},
    {name: "Wintergreen", quantity: 0, price: 2},
    {name: "Eucalyptus", quantity: 0, price: 2},
    {name: "Patchouli", quantity: 0, price: 2},
    {name: "Pomegranate", quantity: 0, price: 2},
    {name: "Carrot Seed", quantity: 0, price: 2},
    {name: "Tangerine", quantity: 0, price: 2},
    {name: "Ylang ylang", quantity: 0, price: 2},
    {name: "Rose", quantity: 0, price: 2},
    {name: "Myrrh", quantity: 0, price: 2},
    {name: "Jojoba", quantity: 0, price: 2},
];
let carrierOils = [
    {name: "Almond", quantity: 0, price: 3},
    {name: "Apricot Kernel", quantity: 0, price: 3},
    {name: "Argan", quantity: 0, price: 3},
    {name: "Avocado", quantity: 0, price: 3},
    {name: "Black Seed", quantity: 0, price: 3},
    {name: "Camellia Seed", quantity: 0, price: 3},
    {name: "Coconut", quantity: 0, price: 3},
    {name: "Cucumber Seed", quantity: 0, price: 3},
    {name: "Evening Primrose", quantity: 0, price: 3},
    {name: "Grape Seed", quantity: 0, price: 3},
    {name: "Guava Seed", quantity: 0, price: 3},
    {name: "Hemp Seed", quantity: 0, price: 3},
    {name: "Jojoba", quantity: 0, price: 3},
    {name: "Macadamia", quantity: 0, price: 3},
    {name: "Olive", quantity: 0, price: 3},
    {name: "Rosehip", quantity: 0, price: 3},
    {name: "Sunflower", quantity: 0, price: 3},
    {name: "Wheat Germ", quantity: 0, price: 3},
    {name: "Shea Butter", quantity: 0, price: 4},
]
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
    //res.render('index/shop')
    res.render('index/shop', {
        essentialOils: essentialOils,
        carrierOils: carrierOils
     });
  });

  router.get('/create', (req, res) => {
    res.render('index/createblend', {
        essentialOils: essentialOils,
        carrierOils: carrierOils
     });
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