async function mapa(){
    console.log('uihdaidhsidsaidajisdbufibadb')
    const vetor = [[-4.40454854,-42.3425765],
    [-4.9222369,    -42.2352189],
    [-6.42722606,   -40.3560105],
    [-7.22741238,   -39.62835594],
    [-7.93959814,   -38.02228738],
    [-8.18542318,   -37.42076322],
    [-8.23046498,   -37.36722534],
    [-8.48100614,   -37.09700474],
    [-9.06383622,   -36.11195302],
    [-9.06383754,   -36.11195214],
    [-9.4119969,    -35.7848307],
    [-9.57475738,   -35.69146686],
    [-10.13130358,  -35.11504166],
    [-10.29969634,  -35.00558394],
    [-10.3005781,   -35.0055779],
    [-10.30058698,  -35.00557918],
    [-10.83069726,  -34.8991453],
    [-10.83070882,  -34.8991497],
    [-10.83104918,  -34.89933346],
    [-10.85503298,  -34.92201298],
    [-11.1549513,   -34.87777426],
    [-11.1549645,   -34.87776942],
    [-11.45516976,  -34.49979841],
    [-11.45518814,  -34.49978104],
    [-11.45520652,  -34.49976367],
    [-11.56322499,  -34.38360352],
    [-11.56320155,  -34.38355992],
    [-11.58443716,  -34.13372145],
    [-11.64485254,  -34.16926454]];

    var somaLat=0;
    var somaLon=0;
    var medLat=0;
    var medLon=0;

    for (i=0; i<vetor.length;i++)
    {
        somaLat += vetor[i][0];
        somaLon += vetor[i][1];
    };
    
    medLat = somaLat/vetor.length;
    medLon = somaLon/vetor.length;
    console.log(medLat, '\n');
    console.log(medLon);

    const map = L.map('mapa1').setView([medLat, medLon], 13);

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
     }).addTo(map);

    for (var i=0; i<vetor.length; i++)
    {
        L.marker([vetor[i][0],vetor[i][1]]).addTo(map).bindPopup(`<b>Lat: ${vetor[i][0]}</b><br><b>Longitude: ${vetor[i][1]}</b>.`).openPopup()
    };

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent(`You clicked the map at ${e.latlng.toString()}`)
            .openOn(map);
    }

    map.on('click', onMapClick);
}

async function mapa2(){
    console.log('uihdaidhsidsaidajisdbufibadb')
    const vetor1 = [[-4.40454854,-42.3425765],
    [-4.9222369,    -42.2352189],
    [-6.42722606,   -40.3560105],
    [-7.22741238,   -39.62835594],
    [-7.93959814,   -38.02228738],
    [-8.18542318,   -37.42076322],
    [-8.23046498,   -37.36722534],
    [-8.48100614,   -37.09700474],
    [-9.06383622,   -36.11195302],
    [-9.06383754,   -36.11195214],
    [-9.4119969,    -35.7848307],
    [-9.57475738,   -35.69146686],
    [-10.13130358,  -35.11504166],
    [-10.29969634,  -35.00558394],
    [-10.3005781,   -35.0055779],
    [-10.30058698,  -35.00557918],
    [-10.83069726,  -34.8991453],
    [-10.83070882,  -34.8991497],
    [-10.83104918,  -34.89933346],
    [-10.85503298,  -34.92201298],
    [-11.1549513,   -34.87777426],
    [-11.1549645,   -34.87776942],
    [-11.45516976,  -34.49979841],
    [-11.45518814,  -34.49978104],
    [-11.45520652,  -34.49976367],
    [-11.56322499,  -34.38360352],
    [-11.56320155,  -34.38355992],
    [-11.58443716,  -34.13372145],
    [-11.64485254,  -34.16926454]];

    var somaLat=0;
    var somaLon=0;
    var medLat=0;
    var medLon=0;

    for (i=0; i<vetor1.length;i++)
    {
        somaLat += vetor1[i][0];
        somaLon += vetor1[i][1];
    };
    
    medLat = somaLat/vetor1.length;
    medLon = somaLon/vetor1.length;
    console.log(medLat, '\n');
    console.log(medLon);

    const map2 = L.map('mapa2').setView([medLat, medLon], 13);

    const es = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
     }).addTo(map2);

    for (var i=0; i<vetor1.length; i++)
    {
        L.marker([vetor1[i][0],vetor1[i][1]]).addTo(map2).bindPopup(`<b>Lat: ${vetor1[i][0]}</b><br><b>Longitude: ${vetor1[i][1]}</b>.`).openPopup()
    };

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent(`You clicked the map at ${e.latlng.toString()}`)
            .openOn(map2);
    }

    map2.on('click', onMapClick);
}