const express = require('express');
const app = express();
const home = require('./routes/home.js');
const about = require('./routes/about.js');
const contact = require('./routes/contact.js');
const carInfo = require('./routes/carinfo.js');


const path = require('path');

app.use(express.static(path.join(__dirname, "public")))


// app.get("/", function (req, res) {
//     res.send("node js express __ goto \npages/1 for example")
// });

app.use("/home", home);
app.use("/about", about);
app.use("/contact", contact);
app.use("/carinfo", carInfo);


app.listen(5005, () => {
    console.log("server is running on port 5005 ...");
})