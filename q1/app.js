const express = require('express');
const app = express();
const hello = require('./routes/hello.js');

app.get("/", function (req, res) {
    res.send("for hello world go to /hello")
});

app.use("/hello", hello);

app.listen(5005, () => {
    console.log("server is running on port 5005 ...");
})