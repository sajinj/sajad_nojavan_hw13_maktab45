const express = require('express');
const routes = express.Router();

let ages = [20, 25, 30 , 35, 36 ,37, 43, 23 , 51, 74]

routes.get(`/`, (req, res)=>{
    res.send(`user page __ there are 10 users currently __ you can go to user/2 for example`)
});

for (let i = 1; i < 11; i++) {
    routes.get(`/${i}`, (req, res)=>{
        res.send(`this page belong to user ${i}`)
    });

    routes.get(`/${i}/age`, (req, res)=>{
        res.send(`age of user ${i} is : ${ages[i-1]}`)
    });
    
}


module.exports = routes;

