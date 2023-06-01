var express = require("express");
var router = express.Router();var express = require("express");
var router = express.Router();
const path = require ('path');

router.get("/comparacao", (req, res)=>{
    res.sendFile(
        path.resolve(__dirname + "/../frontend/home/comparacao.html")
)});

module.exports = router;