const express = require('express');
const routes = express.Router();
const path = require('path');

const pathStr = "E:/projects/maktab/hw13/q5/public/pages"

 routes.get(`/:page`, (req, res)=>{
    res.sendFile(path.join(pathStr, `page${req.params.page}.html`));
 });


module.exports = routes;

