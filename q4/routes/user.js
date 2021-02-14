const express = require('express');
const routes = express.Router();
var fs = require('fs');
var obj;


var obj = JSON.parse(fs.readFileSync('data-json.json', 'utf8'));

routes.post('/getUser', (req, res)=>{
    res.send(req.body);
    for (let i = 0; i < obj.length; i++) {
        if(req.body.firstName === obj[i]){
          console.log(req.body);
        }
        else{
            console.log("nok");
        }
    }
});

module.exports = routes;

