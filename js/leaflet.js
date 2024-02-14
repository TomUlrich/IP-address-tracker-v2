// create a map of the center of London
let map = L.map('map').setView([52.52100062380785, 13.409400113003983], 13);

// add a OpenStreetMap tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// add a marker
let marker = L.marker([51.5, -0.09]).addTo(map);
