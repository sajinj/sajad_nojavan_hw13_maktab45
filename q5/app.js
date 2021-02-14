const express = require('express');
const app = express();
const pages = require('./routes/pages.js');
const path = require('path');

app.use(express.static(path.join(__dirname, "public")))


// app.use("/pages/1",express.static(path.join(__dirname, "public/pages")));


app.get("/", function (req, res) {
    res.send("node js express __ goto pages/1 for example")
});

app.use("/pages", pages);

app.listen(5005, () => {
    console.log("server is running on port 5005 ...");
})