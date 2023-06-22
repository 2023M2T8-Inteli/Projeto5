// Define uma lista vazia para armazenar dados extraídos do banco
let filteredChoques = [];

const southWest = L.latLng(-26.731977, -72.581414);
const northEast = L.latLng(1.497625, -32.04243);
const bounds = L.latLngBounds(southWest, northEast);

const map = L.map("mapa", {
  maxBounds: bounds,
  maxBoundsViscosity: 10.0,
  minZoom: 4,
  maxZoom: 19,
}).setView([-11, -55], 4);

const map2 = L.map("mapa2", {
  maxBounds: bounds,
  maxBoundsViscosity: 10.0,
  minZoom: 4,
  maxZoom: 19,
}).setView([-11, -55], 4);

const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const tiles2 = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map2);

function applyFilters() {
  // Recupera os valores dos filtros da página HTML (viagens 1 e 2)
  const viagemFilter = document.getElementById("dropdownViagem").textContent;
  const engateFilter = document.getElementById("dropdownEngate").textContent;
  const tipoChoqueFilter =
    document.getElementById("dropdownTipoChoque").textContent;

  const viagemFilter2 = document.getElementById("dropdownViagem2").textContent;
  const engateFilter2 = document.getElementById("dropdownEngate2").textContent;
  const tipoChoqueFilter2 = document.getElementById(
    "dropdownTipoChoque2"
  ).textContent;

  // Chama a função fetchData com os valores dos filtros
  fetchData(viagemFilter, engateFilter, tipoChoqueFilter);
  fetchData2(viagemFilter2, engateFilter2, tipoChoqueFilter2);
}

function clearFilters() {
  // Limpa os valores dos filtros para seu texto inicial
  document.getElementById("dropdownViagem").innerHTML =
    'Viagem<i class="bi bi-caret-down-fill"></i>';
  document.getElementById("dropdownEngate").innerHTML =
    'Engate<i class="bi bi-caret-down-fill"></i>';
  document.getElementById("dropdownTipoChoque").innerHTML =
    'Tipo de Choque<i class="bi bi-caret-down-fill"></i>';

  document.getElementById("dropdownViagem2").innerHTML =
    'Viagem<i class="bi bi-caret-down-fill"></i>';
  document.getElementById("dropdownEngate2").innerHTML =
    'Engate<i class="bi bi-caret-down-fill"></i>';
  document.getElementById("dropdownTipoChoque2").innerHTML =
    'Tipo de Choque<i class="bi bi-caret-down-fill"></i>';

  // Chama a função para aplicar os filtros (sendo nulo para indicar que não há filtros aplicados)
  applyFilters();
}

// Função para recuperar dados do backend para os dados 1
async function fetchData(viagemSelected, engateSelected, tipoChoqueSelected) {
  try {
    // Importa os valores dos filtros
    const viagemFilter = viagemSelected;
    const engateFilter = engateSelected;
    const tipoChoqueFilter = tipoChoqueSelected;

    // Constrói a URL de acordo com os valores dos filtros
    let url = "/get-choques?";
    if (viagemFilter && viagemFilter != "Viagem") {
      url += `id_viagem=${viagemFilter}&`;
    }
    if (engateFilter && engateFilter != "Engate") {
      url += `tipo_engate=${engateFilter}&`;
    }
    if (tipoChoqueFilter && tipoChoqueFilter != "Tipo de Choque") {
      url += `tipo_choque=${tipoChoqueFilter}&`;
    }

    url = url.slice(0, -1);
    console.log(url);
    const response = await fetch(url);

    // Analisa os dados do banco
    const data = await response.json();
    filteredChoques = data;

    // Chama a função para atualizar os mapas e gráficos
    updateMap(filteredChoques);
    updateHist(filteredChoques);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Função que busca dados no backend para os dados 2
async function fetchData2(viagemSelected, engateSelected, tipoChoqueSelected) {
  try {
    // Importa os valores dos filtros aplicados
    const viagemFilter = viagemSelected;
    const engateFilter = engateSelected;
    const tipoChoqueFilter = tipoChoqueSelected;

    let url = "/get-choques?";
    if (viagemFilter && viagemFilter != "Viagem") {
      url += `id_viagem=${viagemFilter}&`;
    }
    if (engateFilter && engateFilter != "Engate") {
      url += `tipo_engate=${engateFilter}&`;
    }
    if (tipoChoqueFilter && tipoChoqueFilter != "Tipo de Choque") {
      url += `tipo_choque=${tipoChoqueFilter}&`;
    }

    url = url.slice(0, -1);
    console.log(url);
    const response = await fetch(url);

    // Analisa os dados do banco
    const data = await response.json();
    filteredChoques = data;

    // Chama a função para atualizar os mapas e gráficos
    updateMap2(filteredChoques);
    updateHist2(filteredChoques);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Função para atualizar o mapa 1
function updateMap(data) {
  //Limpa o mapa caso esteja com pontos marcados
  map.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  var latMed = 0;
  var longMed = 0;

  // Adiciona marcadores para cada ponto com dados no mapa
  for (let i = 0; i < data.length; i++) {
    const choque = data[i];
    const latitude = parseFloat(choque.latitude_choque.replace(",", "."));
    const longitude = parseFloat(choque.longitude_choque.replace(",", "."));

    latMed += latitude;
    longMed += longitude;

    const dia = choque.data_choque;
    const hora = choque.hora_choque;
    const forca = Math.round(parseFloat(choque.forca_maxima_choque));
    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(
        `<b>Dia: ${dia}</b><br><b>Hora: ${hora}</b><br><b>Força: ${forca} tf</b>`
      );
  }

  latMed = latMed / data.length;
  longMed = longMed / data.length;

  map.setView([latMed, longMed], 6);
}

// Função para atualizar o mapa 2
function updateMap2(data) {
  //Limpa o mapa caso esteja com pontos marcados
  map2.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      map2.removeLayer(layer);
    }
  });

  var latMed = 0;
  var longMed = 0;

  // Adiciona marcadores para cada ponto com dados no mapa
  for (let i = 0; i < data.length; i++) {
    const choque = data[i];
    const latitude = parseFloat(choque.latitude_choque.replace(",", "."));
    const longitude = parseFloat(choque.longitude_choque.replace(",", "."));

    latMed += latitude;
    longMed += longitude;

    const dia = choque.data_choque;
    const hora = choque.hora_choque;
    const forca = Math.round(parseFloat(choque.forca_maxima_choque));
    L.marker([latitude, longitude])
      .addTo(map2)
      .bindPopup(
        `<b>Dia: ${dia}</b><br><b>Hora: ${hora}</b><br><b>Força: ${forca} tf</b>`
      );
  }

  latMed = latMed / data.length;
  longMed = longMed / data.length;

  map2.setView([latMed, longMed], 6);
}

function updateHist(data) {
  // Constante para armazenar dados do histograma
  const histogramData = [["Choque", "Força Máxima (tf) "]];

  // Extrai o nome e valores dos dados
  data.forEach((item) => {
    const label = `Trecho: ${item.trecho_choque} | Posição: ${item.posicao_choque}`;
    const value = parseFloat(item.forca_maxima_choque);
    histogramData.push([label, value]);
  });

  // Carrega Google Charts e chama a função de criar gráficos
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  // Define a função drawChart
  function drawChart() {
    var data = google.visualization.arrayToDataTable(histogramData);

    var options = {
      title: "Histograma Força Máxima",
      legend: "left",
      height: 450,
      width: "100%",
      vAxis: {
        title: "Número de Ocorrências",
      },
      hAxis: {
        title: "Força Máxima (tf)",
      },
    };

    //Cria o gráfico de histograma
    var chart = new google.visualization.Histogram(
      document.getElementById("histogram-chart")
    );
    chart.draw(data, options);

    document.getElementById("overlay").style.display = "none";
  }
}

function updateHist2(data) {
  // Constante para armazenar dados do histograma
  const histogramData = [["Choque", "Força Máxima"]];

  // Extrai o nome e valores dos dados
  data.forEach((item) => {
    const label = `Trecho: ${item.trecho_choque} Posição: ${item.posicao_choque}`;
    const value = parseFloat(item.forca_maxima_choque);
    histogramData.push([label, value]);
  });

  // Carrega Google Charts e chama a função de criar gráficos
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  // Define a função drawChart
  function drawChart() {
    var data = google.visualization.arrayToDataTable(histogramData);

    var options = {
      title: "Histograma Força Máxima",
      legend: "left",
      height: 450,
      width: "100%",
      vAxis: {
        title: "Número de Ocorrências",
      },
      hAxis: {
        title: "Força Máxima (tf)",
      },
    };

    //Cria o gráfico de histograma
    var chart = new google.visualization.Histogram(
      document.getElementById("histogram-chart2")
    );
    chart.draw(data, options);

    document.getElementById("overlay").style.display = "none";
  }
}

google.charts.load("current", { packages: ["table"] });
google.charts.setOnLoadCallback(updateTable);

// *** CÓDIGO COMENTADO - Para expansão futura *** \\\

// function updateTable(data) {
//   var tableData = [];

//   // Converte os dados para o formato pré-definido da tabela
//   data.forEach(item => {
//     var row = [
//       item.id_choque,
//       item.tipo_choque,
//       item.data_choque,
//       item.hora_choque,
//       item.latitude_choque,
//       item.longitude_choque,
//       item.velocidade_choque,
//       item.posicao_choque,
//       item.trecho_choque,
//       item.forca_maxima_choque,
//       item.ACT_choque,
//       item.PEG_choque,
//       item.id_vagao,
//       item.id_viagem,
//       item.tipo_engate
//     ];
//     tableData.push(row);
//   });

//   console.log(tableData);

//   function drawTable() {
//     var tabelaChoques = new google.visualization.DataTable();

//     tabelaChoques.addColumn('number', 'ID Choque');
//     tabelaChoques.addColumn('number', 'Tipo');
//     tabelaChoques.addColumn('string', 'Data');
//     tabelaChoques.addColumn('string', 'Hora');
//     tabelaChoques.addColumn('string', 'Latitude');
//     tabelaChoques.addColumn('string', 'Longitude');
//     tabelaChoques.addColumn('number', 'Velocidade');
//     tabelaChoques.addColumn('number', 'Posição');
//     tabelaChoques.addColumn('string', 'Trecho');
//     tabelaChoques.addColumn('number', 'Força Máxima');
//     tabelaChoques.addColumn('number', 'ACT');
//     tabelaChoques.addColumn('number', 'PEG');
//     tabelaChoques.addColumn('number', 'ID Vagão');
//     tabelaChoques.addColumn('number', 'ID Viagem');
//     tabelaChoques.addColumn('string', 'Tipo Engate');

//     tabelaChoques.addRows(tableData);

//     var options = {
//       title: 'Tabela de Choques',
//       showRowNumber: true,
//       width: '100%',
//       height: '100%',
//       page: 'enable',
//       pageSize: 30, // Número de linhas por página
//     };

//     console.log(tabelaChoques);

//     // Cria a tabela
//     var table = new google.visualization.Table(document.getElementById('table-div'));
//     table.draw(tabelaChoques, options);
//   }

//   drawTable();
// }

// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(updatePizza);

// function updatePizza(data) {
//   console.log("pizaaaaaa");
//   const trackCounts = {};

//   // Conta as ocorrências de choques em cada trecho
//   data.forEach(item => {
//     const trackName = item.trecho_choque;
//     if (trackCounts.hasOwnProperty(trackName)) {
//       trackCounts[trackName]++;
//     } else {
//       trackCounts[trackName] = 1;
//     }
//   });

//   // Constante para armazenar os dados do gráfico
//   const pizzaData = [
//     ['Trecho', 'Numero de Choques']
//   ];

//   for (const trackName in trackCounts) {
//     if (trackCounts.hasOwnProperty(trackName)) {
//       pizzaData.push([trackName, trackCounts[trackName]]);
//     }
//   }

//     var data = google.visualization.arrayToDataTable(pizzaData);

//     // Opções do gráfico de pizza
//     var options = {
//       title: 'Numero de Choques por Trecho',
//       legend: 'left',
//       is3D: true,
//       height: 700,
//       width: 750,
//     };

//     // Cria o gráfico de pizza
//     var chart = new google.visualization.PieChart(document.getElementById('pizza'));
//     chart.draw(data, options);

// }

// Função que lida com a alteração dos filtros
function handleFilterChange() {
  fetchData();
}

// Adiciona event listeners nos filtros dropdowns
const dropdowns = document.querySelectorAll(".dropdown-select");
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("change", handleFilterChange);
});
