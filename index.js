const express = require("express");
const app = express();
const port = 8080;

const path = require("path");


app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));


app.get("/", (req,res) => {
    res.render("index.ejs")
    console.log("working")
})






app.listen(port, () => {
    console.log("Listening app 8080 local host")
})