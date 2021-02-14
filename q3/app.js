const express = require('express');
const app = express();
const user = require('./routes/user.js');
const path = require('path');

app.use(express.static(path.join(__dirname, "public")))



app.get("/", function (req, res) {
    res.send("node js express")
});

app.use("/user", user);

app.listen(5005, () => {
    console.log("server is running on port 5005 ...");
})