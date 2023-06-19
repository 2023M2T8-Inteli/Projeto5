// Limites do mapa
const southWest = L.latLng(-26.731977, -72.581414);
const northEast = L.latLng(1.497625, -32.042430);
const bounds = L.latLngBounds(southWest, northEast);

// Ciracao do mapa
const map = L.map('mapa', {
  maxBounds: bounds,
  maxBoundsViscosity: 10.0,
  minZoom: 4,
  maxZoom: 19,
}).setView([-11, -55], 4);

// Chamando API para ter um plano de fundo
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const map2 = L.map('mapa2', {
  maxBounds: bounds,
  maxBoundsViscosity: 10.0,
  minZoom: 4,
  maxZoom: 19,
}).setView([-11, -55], 4);

// Chamando API para ter um plano de fundo
const tiles2 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map2);


initMap(true);

// Funcao para aplicar filtros selecionados pelo usuario 
// analiseComparacao = parametro que define se a funcao foi chamada da tela analise ou da tela comparacao
function applyFilters(double) {
  // Get the selected filter values
  const viagemFilter = document.getElementById('dropdownViagem').textContent;
  const engateFilter = document.getElementById('dropdownEngate').textContent;
  const tipoChoqueFilter = document.getElementById('dropdownTipoChoque').textContent;

  fetchData(viagemFilter, engateFilter, tipoChoqueFilter, false);
  toggleOverlay('overlay', 'none');

  // Call the fetchData function with the filter values
  if (double == true) {

    // Get the selected filter values
    const viagemFilter2 = document.getElementById('dropdownViagem2').textContent;
    const engateFilter2 = document.getElementById('dropdownEngate2').textContent;
    const tipoChoqueFilter2 = document.getElementById('dropdownTipoChoque2').textContent;

    fetchData(viagemFilter2, engateFilter2, tipoChoqueFilter2, true);
    toggleOverlay('overlay', 'none');

  }
}

// Funcao que reseta osfiltros
function clearFilters(double) {
  // Reset the dropdown values to their initial text
  document.getElementById('dropdownViagem').innerHTML = 'Viagem<i class="bi bi-caret-down-fill"></i>';
  document.getElementById('dropdownEngate').innerHTML = 'Engate<i class="bi bi-caret-down-fill"></i>';
  document.getElementById('dropdownTipoChoque').innerHTML = 'Tipo de Choque<i class="bi bi-caret-down-fill"></i>';

  // Call the function to apply the filters (passing null to indicate no filters are selected)
  if (double == true) {
    applyFilters(null, null, null, true);

    // Reset the dropdown values to their initial text
    document.getElementById('dropdownViagem2').innerHTML = 'Viagem<i class="bi bi-caret-down-fill"></i>';
    document.getElementById('dropdownEngate2').innerHTML = 'Engate<i class="bi bi-caret-down-fill"></i>';
    document.getElementById('dropdownTipoChoque2').innerHTML = 'Tipo de Choque<i class="bi bi-caret-down-fill"></i>';

  } else {
    applyFilters(null, null, null, false);
  }

}

// Function to fetch data from the backend
async function fetchData(viagemSelected, engateSelected, tipoChoqueSelected, double) {
  // Define an empty array to store the fetched data
  let filteredChoques = [];
  let filteredChoques2 = [];
  try {

    // Get the selected filter values
    const viagemFilter = viagemSelected;
    const engateFilter = engateSelected;
    const tipoChoqueFilter = tipoChoqueSelected;

    // Construct the URL based on the selected filter values
    let url = '/get-choques?';
    if (viagemFilter && viagemFilter != 'Viagem') {
      url += `id_viagem=${viagemFilter}&`;
    }
    if (engateFilter && engateFilter != 'Engate') {
      url += `tipo_engate=${engateFilter}&`;
    }
    if (tipoChoqueFilter && tipoChoqueFilter != 'Tipo de Choque') {
      url += `tipo_choque=${tipoChoqueFilter}&`;
    }

    // Remove the trailing '&' character from the URL
    url = url.slice(0, -1);
    console.log(url);

    // Make an asynchronous request to the backend route
    const response = await fetch(url);

    // Parse the response JSON
    const data = await response.json();

    console.log(data);
    // Update the data arrays with the fetched data
    if (double == false) {
      filteredChoques = data;
      updateWidgets(filteredChoques, false);
    } else {
      filteredChoques2 = data;
      updateWidgets(filteredChoques2, true);
    }


  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function updateWidgets(choques, double) {

  updateMap(choques, false);
  updateHist(choques, false);
  updateTable(choques);
  updatePizza(choques);

  if (double == true) {
    updateMap(choques, true);
    updateHist(choques, true);
  }

}

// Function to update the map with the updated data
function updateMap(data, double) {
if (double == false) {
  // Clear existing markers from the map (if any)
  map.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  // Add markers for each data point in data
  for (let i = 0; i < data.length; i++) {
    const choque = data[i];
    const latitude = choque.latitude_choque;
    const longitude = choque.longitude_choque;
    const forca = choque.forca_maxima_choque;
    const dia = choque.data_choque;
    const hora = choque.hora_choque;
    L.marker([latitude, longitude]).addTo(map).bindPopup(`<b>Força: ${forca} tf</b><br><b>Data: ${dia}</b><br><b>Hora: ${hora}</b>`);
  }

 } else {

    // Clear existing markers from the map (if any)
    map2.eachLayer(function (layer) {
      if (layer instanceof L.Marker) {
        map2.removeLayer(layer);
      }
    });


    // Add markers for each data point in data
    for (let i = 0; i < data.length; i++) {
      const choque = data[i];
      const latitude = choque.latitude_choque;
      const longitude = choque.longitude_choque;
      const forca = choque.forca_maxima_choque;
      const dia = choque.data_choque;
      const hora = choque.hora_choque;
      L.marker([latitude, longitude]).addTo(map2).bindPopup(`<b>Força: ${forca} tf</b><br><b>Data: ${dia}</b><br><b>Hora: ${hora}</b>`);
    }
  }
}

// Funcao para update o histograma
function updateHist(data, double) {
  // Create an array to store histogram data
  const histogramData = [
    ['Choque', 'Força Máxima']
  ];

  // Iterate over the data array and extract label and value
  data.forEach(item => {
    const label = `Trecho: ${item.trecho_choque} Posição: ${item.posicao_choque}`;
    const value = parseFloat(item.forca_maxima_choque);
    histogramData.push([label, value]);
  });

  // Load Google Charts and call the drawChart function
  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  // Define the drawChart function
  function drawChart() {
    var data = google.visualization.arrayToDataTable(histogramData);

    // Set the options for the histogram
    var options = {
      title: 'Histograma Força Máxima',
      legend: 'left',
      height: 570,
      width: 1050,
    };

    // Create a histogram chart
    var chart = new google.visualization.Histogram(document.getElementById('histogram-chart'));
    chart.draw(data, options);

  }
}

// Pacotes necessarios para criacao da tabela
google.charts.load('current', { 'packages': ['table'] });
google.charts.setOnLoadCallback(updateTable);

// Funcao para update tabela
function updateTable(data) {
  var tableData = [];

  // Convert the data into the required format for the table
  data.forEach(item => {
    var row = [
      item.id_choque,
      item.tipo_choque,
      item.data_choque,
      item.hora_choque,
      item.latitude_choque,
      item.longitude_choque,
      item.velocidade_choque,
      item.posicao_choque,
      item.trecho_choque,
      item.forca_maxima_choque,
      item.ACT_choque,
      item.PEG_choque,
      item.id_vagao,
      item.id_viagem,
      item.tipo_engate
    ];
    tableData.push(row);
  });

  function drawTable() {
    var tabelaChoques = new google.visualization.DataTable();

    tabelaChoques.addColumn('number', 'ID Choque');
    tabelaChoques.addColumn('number', 'Tipo');
    tabelaChoques.addColumn('string', 'Data');
    tabelaChoques.addColumn('string', 'Hora');
    tabelaChoques.addColumn('string', 'Latitude');
    tabelaChoques.addColumn('string', 'Longitude');
    tabelaChoques.addColumn('number', 'Velocidade');
    tabelaChoques.addColumn('number', 'Posição');
    tabelaChoques.addColumn('string', 'Trecho');
    tabelaChoques.addColumn('number', 'Força Máxima');
    tabelaChoques.addColumn('number', 'ACT');
    tabelaChoques.addColumn('number', 'PEG');
    tabelaChoques.addColumn('number', 'ID Vagão');
    tabelaChoques.addColumn('number', 'ID Viagem');
    tabelaChoques.addColumn('string', 'Tipo Engate');

    tabelaChoques.addRows(tableData);

    var options = {
      title: 'Tabela de Choques',
      showRowNumber: true,
      width: '100%',
      height: '100%',
      page: 'enable', // Enable pagination
      pageSize: 30, // Number of rows to display per page
    };

    // Create the table
    var table = new google.visualization.Table(document.getElementById('table-div'));
    table.draw(tabelaChoques, options);
  }

  drawTable();
}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(updatePizza);

function updatePizza(data) {
  // Create an object to store track counts
  const trackCounts = {};

  // Count the occurrences of each track name
  data.forEach(item => {
    const trackName = item.trecho_choque;
    if (trackCounts.hasOwnProperty(trackName)) {
      trackCounts[trackName]++;
    } else {
      trackCounts[trackName] = 1;
    }
  });

  // Create an array to store pizza data
  const pizzaData = [
    ['Trecho', 'Numero de Choques']
  ];

  // Iterate over the track counts object and populate the pizza data array
  for (const trackName in trackCounts) {
    if (trackCounts.hasOwnProperty(trackName)) {
      pizzaData.push([trackName, trackCounts[trackName]]);
    }
  }

  var data = google.visualization.arrayToDataTable(pizzaData);

  // Set the options for the pie chart
  var options = {
    title: 'Numero de Choques por Trecho',
    legend: 'left',
    is3D: true,
    height: 700,
    width: 750,
  };

  // Create a pie chart
  var chart = new google.visualization.PieChart(document.getElementById('pizza'));
  chart.draw(data, options);

}

// Function to handle the filter change event
function handleFilterChange() {
  fetchData();
}

function toggleOverlay(className, displayState) {
  var elements = document.getElementsByClassName(className)

  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = displayState;
  }
}

// Attach event listeners to the filter dropdowns
const dropdowns = document.querySelectorAll('.dropdown-select');
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('change', handleFilterChange);
});
