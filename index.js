
const express = require('express');
const passport = require('passport');
const path = require('path');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const NewPool = require('pg').Pool
const newpool = new NewPool ({
    user: 'chantee',
    host: 'localhost',
    database: 'remedies',
    password: '',
    port: 5432,
})
//new

const db = require('./queries') 
// const db = require('./database/index') //test

const { Pool, Client } = require('pg')
const connectionString = 'postgressql://postgres:postgres@localhost:5432/remedies'

const client = new Client({
    connectionString: connectionString
});
client.connect();

//new
const exphbs = require('express-handlebars');

const index = require('./routes/index');

const app = express();
// Add express sessions here***************
// require('./config/passport')(passport, db)

app.use(passport.initialize())
app.use(passport.session())

//passport

const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy((username, password, cb) => {
    newpool.query('SELECT id, username, password FROM users WHERE username= $1', [username], (err, result) => {
      if(err) {
          console.log(err)
        return cb(err)
      }
  console.log(result)
      if(result.rows.length > 0) {
        const first = result.rows[0]
        cb(null, { id: first.id, username: first.username})
       } else {
         cb(null, false)
       }
    })
  }))


  passport.serializeUser((user, done) => {
      console.log("serializing")
    done(null, user.id)
  })
  
  passport.deserializeUser((id, cb) => {
      console.log("deserializing")
    db.query('SELECT id, username FROM users WHERE id = $1', [parseInt(id, 10)], (err, results) => {
        console.log("passport")
      if(err) {
          console.log(err)
        return cb(err)
      }
  
      cb(null, results.rows[0])
    })
  })




//end passport

app.engine('handlebars', exphbs ({
    defaultLayout: 'main'}))

app.set('view engine', 'handlebars')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true 
}));
app.use(express.static('public'))
app.use('/', index);
app.post('/login', passport.authenticate('local'), users.login)

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen('3003');