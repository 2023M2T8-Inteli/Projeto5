var express = require("express");
const app = express();
var router = express.Router();
const path = require ('path');

router.get("/", (req, res)=>{
    res.sendFile(
        path.resolve(__dirname + "./../../../frontend/paginas/login/login.html")
)});

module.exports = router;