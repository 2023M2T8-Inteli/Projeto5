//Essa rota não esta sendo utilizada no projeto
//No entanto construir essa rota a partir da estrutura que aqui se encontra pode ser útil para facilitar o desenvolvimento das futuras melhorias no site
var express = require("express");
var router = express.Router();

const inserirChoque = require("../../sql_functions/create/choques.inserir_choques");

router.post("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const tipo_choque = req.body.tipo_choque;
  const data_choque = req.body.data_choque;
  const hora_choque = req.body.hora_choque;
  const latitude_choque = req.body.latitude_choque;
  const longitude_choque = req.body.longitude_choque;
  const velocidade_choque = req.body.velocidade_choque;
  const posicao_choque = req.body.posicao_choque;
  const placa_virtual_choque = req.body.placa_virtual_choque;
  const trecho_choque = req.body.trecho_choque;
  const forca_maxima_choque = req.body.forca_maxima_choque;
  const ACT_choque = req.body.ACT_choque;
  const PEG_choque = req.body.PEG_choque;
  const id_vagao = req.body.id_vagao;

  inserirChoque(
    tipo_choque,
    data_choque,
    hora_choque,
    latitude_choque,
    longitude_choque,
    velocidade_choque,
    posicao_choque,
    placa_virtual_choque,
    trecho_choque,
    forca_maxima_choque,
    ACT_choque,
    PEG_choque,
    id_vagao,
    res
  );
});

module.exports = router;
