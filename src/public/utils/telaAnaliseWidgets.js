// Define an empty array to store the fetched data
let filteredChoques = [];

const southWest = L.latLng(-26.731977, -72.581414);
const northEast = L.latLng(1.497625, -32.042430);
const bounds = L.latLngBounds(southWest, northEast);

const map = L.map('mapa', {
  maxBounds: bounds,
  maxBoundsViscosity: 10.0,
  minZoom: 4,
  maxZoom: 19,
}).setView([-11, -55], 4);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function applyFilters() {
    // Get the selected filter values
    const viagemFilter = document.getElementById('dropdownViagem').textContent;
    const engateFilter = document.getElementById('dropdownEngate').textContent;
    const tipoChoqueFilter = document.getElementById('dropdownTipoChoque').textContent;
    
    // Call the fetchData function with the filter values
    fetchData(viagemFilter, engateFilter, tipoChoqueFilter);
}

function clearFilters() {
  // Reset the dropdown values to their initial text
  document.getElementById('dropdownViagem').innerHTML = 'Viagem<i class="bi bi-caret-down-fill"></i>';
  document.getElementById('dropdownEngate').innerHTML = 'Engate<i class="bi bi-caret-down-fill"></i>';
  document.getElementById('dropdownTipoChoque').innerHTML = 'Tipo de Choque<i class="bi bi-caret-down-fill"></i>';

  // Call the function to apply the filters (passing null to indicate no filters are selected)
  applyFilters(null, null, null);
}

// Function to fetch data from the backend
async function fetchData(viagemSelected, engateSelected, tipoChoqueSelected) {
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
        
        // Update the data arrays with the fetched data
        filteredChoques = data;
        
        // Call the function to update the widgets with the new data
        updateMap(filteredChoques);
        updateHist(filteredChoques);
        updateTable(filteredChoques);
        updatePizza(filteredChoques);
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to update the map with the updated data
function updateMap(data) {
    // Clear existing markers from the map (if any)
    map.eachLayer(function (layer) {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    // Add markers for each data point in data
    for (let i = 0; i < data.length; i++) {
        const choque = data[i];
        const latitude = parseFloat(choque.latitude_choque.replace(',', '.'));
        const longitude = parseFloat(choque.longitude_choque.replace(',', '.'));
        L.marker([latitude, longitude]).addTo(map).bindPopup(`<b>Lat: ${latitude}</b><br><b>Long: ${longitude}</b>.`);
    }
}

function updateHist(data) {
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

      document.getElementById('overlay').style.display = 'none';
    }
}

google.charts.load('current', { 'packages': ['table'] });
google.charts.setOnLoadCallback(updateTable);

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

  console.log(tableData);

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

    console.log(tabelaChoques);

    // Create the table
    var table = new google.visualization.Table(document.getElementById('table-div'));
    table.draw(tabelaChoques, options);
  }

  drawTable();
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(updatePizza);

function updatePizza(data) {
  console.log("pizaaaaaa");
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

// Attach event listeners to the filter dropdowns
const dropdowns = document.querySelectorAll('.dropdown-select');
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('change', handleFilterChange);
});
