const express = require('express');
const app = express();
const image = require('./routes/imageRoute.js');
const path = require('path');


app.use("/image",express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    res.send('please go to /image ')
});

app.use("/image", image);

app.listen(5005, () => {
    console.log("server is running on port 5005 ...");
})