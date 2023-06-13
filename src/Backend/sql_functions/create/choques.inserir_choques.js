const execSqlQuery = require("./../connection");

function inserirVagao(
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
) {
  const query = `INSERT INTO choques (tipo_choque, data_choque, hora_choque, latitude_choque, longitude_choque, velocidade_choque, posicao_choque, placa_virtual_choque, trecho_choque, forca_maxima_choque, ACT_choque, PEG_choque, id_vagao) VALUES("${tipo_choque}", date("${data_choque}"), time("${hora_choque}"), "${latitude_choque}", "${longitude_choque}", ${velocidade_choque} , ${posicao_choque}, "${placa_virtual_choque}", "${trecho_choque}", "${forca_maxima_choque}", "${ACT_choque}", "${PEG_choque}", ${id_vagao})`;

  execSqlQuery(query, res);
}

module.exports = inserirVagao;
