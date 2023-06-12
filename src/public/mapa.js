// Define an empty array to store the fetched data
let vetor = [];
const map = L.map('mapa').setView([-11, -55], 4);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
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

// Function to fetch data from the backend
async function fetchData(viagemSelected, engateSelected, tipoChoqueSelected) {
    try {
        // Get the selected filter values
        const viagemFilter = viagemSelected;
        const engateFilter = engateSelected;
        const tipoChoqueFilter = tipoChoqueSelected;

        // Construct the URL based on the selected filter values
        let url = '/get-choques?';
        if (viagemFilter != 'Viagem') {
            url += `id_viagem=${viagemFilter}&`;
        } else {
            url += `id_viagem=${null}&`;
        }
        if (engateFilter != 'Engate') {
            url += `tipo_engate=${engateFilter}&`;
        } else {
            url += `tipo_engate=${null}&`;
        }
        if (tipoChoqueFilter != 'Tipo de Choque') {
            url += `tipo_choque=${tipoChoqueFilter}&`;
        } else {
            url += `tipo_choque=${null}&`;
        }
        
        // Remove the trailing '&' character from the URL
        url = url.slice(0, -1);
        console.log(url);
        
        // Make an asynchronous request to the backend route
        const response = await fetch(url);
        
        // Parse the response JSON
        const data = await response.json();
        
        // Update the vetor array with the fetched data
        vetor = data;
        
        // Call the function to update the map with the new data
        updateMap();
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to update the map with the updated data
function updateMap() {
    // Clear existing markers from the map (if any)
    map.eachLayer(function (layer) {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    // Add markers for each data point in vetor
    for (let i = 0; i < vetor.length; i++) {
        const choque = vetor[i];
        const latitude = parseFloat(choque.latitude_choque.replace(',', '.'));
        const longitude = parseFloat(choque.longitude_choque.replace(',', '.'));
        L.marker([latitude, longitude]).addTo(map).bindPopup(`<b>Lat: ${latitude}</b><br><b>Longitude: ${longitude}</b>.`).openPopup();
    }
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

// Call the fetchData function to retrieve data from the backend
fetchData();

