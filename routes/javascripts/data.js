const fs = require('fs');
const express = require('express');
const app = express();
const router = express.Router();
var css = require('css');

const db = require('../../database');



const fetch = require("node-fetch");





router.get('/', function (req, res) {
    res.send('Hello')
})



  module.exports = router; 