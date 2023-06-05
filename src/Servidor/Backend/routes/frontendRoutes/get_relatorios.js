var express = require("express");
var app = express();
var router = express.Router();
const path = require ('path');

router.get("/", (req, res)=>{
    res.sendFile(
        path.resolve(__dirname + "./../../../frontend/paginas/relatorios/relatorios.html")
)});

module.exports = router;