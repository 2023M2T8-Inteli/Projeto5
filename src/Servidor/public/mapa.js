console.log("aaaaaa");


// Define an empty array to store the fetched data
let vetor = [];
const map = L.map('mapa').setView([10, 10], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       maxZoom: 19,
       attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

// Function to fetch data from the backend
async function fetchData() {
    try {
        
        // Make an asynchronous request to the backend route
        const response = await fetch('/get-choques-by-id-viagem?id_viagem=1');
        
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
        const latitude = parseFloat(vetor[i].latitude_choque.replace(',', '.'));
        const longitude = parseFloat(vetor[i].longitude_choque.replace(',', '.'));
        console.log(latitude, longitude)
        L.marker([latitude, longitude]).addTo(map).bindPopup(`<b>Lat: ${latitude}</b><br><b>Longitude: ${longitude}</b>.`).openPopup();
    }
}

// Call the fetchData function to retrieve data from the backend
fetchData();

   function onMapClick(e) {
       popup
           .setLatLng(e.latlng)
           .setContent(`You clicked the map at ${e.latlng.toString()}`)
           .openOn(map);
   }

   map.on('click', onMapClick);