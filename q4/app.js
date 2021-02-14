const express = require('express');
const app = express();
const admin = require('./routes/admin.js');
const user = require('./routes/user.js');

const path = require('path');
var fs = require('fs');
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(path.join(__dirname, "public")));


app.get("/", function (req, res) {
  res.send("hello express __ for user go to /user/getUser __ for get all users go to /admin/getAll Users")
});

app.use("/admin", admin);
app.use("/user", user);


app.listen(5005, () => {
  console.log("server is running on port 5005 ...");
})