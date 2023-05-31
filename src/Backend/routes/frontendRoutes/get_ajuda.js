var express = require("express");
var router = express.Router();
const path = require ('path');

router.get("/ajuda", (req, res)=>{
    res.sendFile(
        path.resolve(__dirname + "/../frontend/home/ajuda.html")
)});

module.exports = router;