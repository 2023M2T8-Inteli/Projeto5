var express = require("express");
var router = express.Router();
const path = require ('path');


router.get("/home", (req, res)=>{
    res.sendFile(
        path.resolve(__dirname + "/../frontend/home/home.html")
)});

module.exports = router;