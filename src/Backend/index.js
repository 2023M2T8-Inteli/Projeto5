const express = require("express");
const sqlite3 = require("sqlite3");
const app = express();
const hostname = "127.0.0.1";
const port = 3031;
const db = new sqlite3.Database("database.db")

const path = require("path");
const cors = require("cors");
const bp = require("body-parser");
const cookieParser = require("cookie-parser");
const urlencodedParser = bp.urlencoded({ extended: false })
app.use(bp.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//app.use(express.static("../frontend/Parceiro"));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.get("/login", (req, res)=>{
    res.sendFile(
        path.resolve(__dirname + "/../frontend/login")
    
)});

app.get("/home", (req, res)=>{
    res.sendFile(
        path.resolve(__dirname + "/../frontend/home")
    
)});

