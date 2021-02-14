const express = require('express');
const routes = express.Router();
var fs = require('fs');
var obj;


var obj = JSON.parse(fs.readFileSync('data-json.json', 'utf8'));
let find = false;
routes.post('/getUser', (req, res)=>{

    
    for (let i = 0; i < obj.length; i++) {
        if(req.body.id == obj[i].id){
          res.send(obj[i]);
          find = true;
        }
    
    }

    if(!find){
        res.status(404).send('there is  no user with this id!')
    }
});

module.exports = routes;

