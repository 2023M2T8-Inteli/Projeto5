//Essa rota não esta sendo utilizada no projeto
//No entanto construir essa rota a partir da estrutura que aqui se encontra pode ser útil para facilitar o desenvolvimento das futuras melhorias no site

//Conecta ao banco de dados
const execSqlQuery = require("./../connection");

//Função que insere dados no banco de dados
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

//Exporta a função para que seja possível utilizá-la em outras partes do projeto
module.exports = inserirVagao;
