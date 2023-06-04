var express = require("express");
var router = express.Router();
const path = require ('path');

router.get("/ajuda", (req, res)=>{
    res.sendFile(__dirname + "./../../../frontend/paginas/login/login.html")
});

module.exports = router;