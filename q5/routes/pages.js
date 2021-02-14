const express = require('express');
const routes = express.Router();
const path = require('path');

const pathStr = "E:/projects/maktab/hw13/q5/public/pages"

routes.get(`/1`, (req, res)=>{
   res.sendFile(path.join(pathStr, `page1.html`));
});

routes.get(`/2`, (req, res)=>{
    res.sendFile(path.join(pathStr, `page2.html`));
 });

 routes.get(`/3`, (req, res)=>{
    res.sendFile(path.join(pathStr, `page3.html`));
 });

 routes.get(`/4`, (req, res)=>{
    res.sendFile(path.join(pathStr, `page4.html`));
 });

 routes.get(`/5`, (req, res)=>{
    res.sendFile(path.join(pathStr, `page5.html`));
 });

module.exports = routes;

