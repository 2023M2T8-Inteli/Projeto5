var express = require("express");
var router = express.Router();

const getViagensByIdRelatorio = require("../sql_functions/read/viagens.get_viagens_by_id_relatorio");

router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const id_relatorio = req.query.id_relatorio;

  getViagensByIdRelatorio(id_relatorio, res);
});

module.exports = router;
