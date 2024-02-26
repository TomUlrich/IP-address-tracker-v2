const ip = document.getElementById('ip');
const city = document.getElementById('city');
const region = document.getElementById('region');
const postalCode = document.getElementById('postalCode');
const timezone = document.getElementById('timezone');
const isp = document.getElementById('isp');

async function fetchPublicIP() {
  try {
    return await getPublicIP(); // Return the promise returned by getPublicIP()
  } catch (error) {
    console.error('Error occurred:', error);
    throw error;
  }
}

async function getPublicIP() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error fetching public IP address:', error);
    throw error;
  }
}

fetchPublicIP().then((ip) => {
  console.log('KKK', ip); // Access the resolved IP here
});

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

      ip.innerText = `${dataObject.ip}`;
      city.innerText = `${dataObject.city}`;
      region.innerText = `${dataObject.region}`;
      postalCode.innerText = `${dataObject.postalCode}`;
      timezone.innerText = `${dataObject.timezone}`;
      isp.innerText = `${dataObject.isp}`;
      const lat = dataObject.lat;
      const lng = dataObject.lng;

      // change map & marker location
      map.panTo(new L.LatLng(lat, lng));
      map.removeLayer(marker);
      marker = L.marker([lat, lng]).addTo(map);
    })
    .catch((error) => {
      console.error('Error fetching location:', error);
    });
});
