const express = require('express');
const routes = express.Router();
const path = require('path');

const pathStr = "E:/projects/maktab/hw13/q7/public/pages"

//  routes.get(`/:page`, (req, res)=>{
//     res.sendFile(path.join(pathStr, `page${req.params.page}.html`));
//  });

 routes.get(`/`, (req, res)=>{
   res.sendFile(path.join(pathStr, `contact.html`));
});


module.exports = routes;

