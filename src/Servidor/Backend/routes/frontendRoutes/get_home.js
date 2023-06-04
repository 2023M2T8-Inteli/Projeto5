var express = require("express");
var app = express();
var router = express.Router();
const path = require ('path');

router.get("/home", (req, res)=>{
    res.sendFile(
        path.resolve(__dirname + "./../../../Frontend/paginas/homepage/homepage.html")
)});

module.exports = router;