const express = require('express');
const routes = express.Router();



routes.get(`/1`, (req, res)=>{
    res.send(`user page __ there are 10 users currently __ you can go to user/2 for example`)
});




module.exports = routes;

