var express = require("express");
var router = express.Router();
const path = require ('path');

router.get("/analise", (req, res)=>{
    res.sendFile(
        path.resolve(__dirname + "/../frontend/home/analise.html")
)});

module.exports = router;