
const express = require('express');
const path = require('path')

// const accountRoute = require('./public/javascripts/data.js');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


const index = require('./routes/index');


   

const app = express();




app.engine('handlebars', exphbs ({
    defaultLayout: 'main'}))

app.set('view engine', 'handlebars')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true 
}));
app.use(express.static('public'))
app.use('/', index);


app.listen('3003');