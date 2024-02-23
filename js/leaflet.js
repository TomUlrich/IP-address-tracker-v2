// create a map of the center of Berlin with LeafLet
let map = L.map('map', { zoomControl: false }).setView([52.52100062380785, 13.409400113003983], 13);

// add a OpenStreetMap tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// add a marker
let marker = L.marker([52.52100062380785, 13.409400113003983]).addTo(map);

// handle IP input with ipify API
document.querySelector('.ip-input').addEventListener('submit', function (event) {
  event.preventDefault();
  const ipAddress = document.querySelector('.ip--input-text').value;

  fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_1ufvcTi6RGdIVckywnulqDLHsRfa6&ipAddress=${ipAddress}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const dataObject = {
        ip: data.ip,
        city: data.location.city,
        region: data.location.region,
        postalCode: data.location.postalCode,
        timezone: data.location.timezone,
        isp: data.isp,
        lat: data.location.lat,
        lng: data.location.lng,
      };
      console.log(dataObject);

      const ip = (document.getElementById('ip').innerText = `${dataObject.ip}`);
      const city = (document.getElementById('city').innerText = `${dataObject.city}`);
      const region = (document.getElementById('region').innerText = `${dataObject.region}`);
      const postalCode = (document.getElementById('postalCode').innerText = `${dataObject.postalCode}`);
      const timezone = (document.getElementById('timezone').innerText = `${dataObject.timezone}`);
      const isp = (document.getElementById('isp').innerText = `${dataObject.isp}`);
      const lat = dataObject.lat;
      const lng = dataObject.lng;

      // change map & marker location
      map.panTo(new L.LatLng(lat, lng));
      map.removeLayer(marker);
      marker = L.marker([lat, lng]).addTo(map);
    })
    .catch((error) => {
      console.error('Error fetching location:', error);
      document.getElementById('locationInfo').innerText = `<p>Error fetching location. Please try again later.</p>`;
    });
});
