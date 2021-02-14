const express = require('express');
const routes = express.Router();
var fs = require('fs');
var obj;


var obj = JSON.parse(fs.readFileSync('data-json.json', 'utf8'));

routes.get('/getAllUsers', (req, res)=>{
    res.send(obj);
});

module.exports = routes;

