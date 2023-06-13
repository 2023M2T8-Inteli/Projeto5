var express = require("express");
var app = express();
var router = express.Router();
const path = require ('path');

router.get("/", (_, res)=>{
    res.sendFile(
        path.resolve(__dirname + "./../../../frontend/paginas/homepage/homepage.html")
)});

module.exports = router;