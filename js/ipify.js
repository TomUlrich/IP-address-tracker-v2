document.querySelector('.ip-input').addEventListener('submit', function (event) {
  event.preventDefault();
  const ipAddress = document.querySelector('.ip--input-text').value;

  fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_1ufvcTi6RGdIVckywnulqDLHsRfa6&ipAddress=${ipAddress}`)
    .then((response) => response.json())
    .then((data) => {
      const dataObject = {
        ip: data.ip,
        city: data.location.city,
        region: data.location.region,
        postalCode: data.location.postalCode,
        timezone: data.location.timezone,
        isp: data.isp,
      };
      console.log(dataObject);

      const ip = document.getElementById('ip').innerText=`${dataObject.ip}`;
      const city = document.getElementById('city').innerText=`${dataObject.city}`;
      const region = document.getElementById('region').innerText=`${dataObject.region}`;
      const postalCode = document.getElementById('postalCode').innerText=`${dataObject.postalCode}`;
      const timezone = document.getElementById('timezone').innerText=`${dataObject.timezone}`;
      const isp = document.getElementById('isp').innerText=`${dataObject.isp}`;
    })
    .catch((error) => {
      console.error('Error fetching location:', error);
      document.getElementById('locationInfo').innerText = `<p>Error fetching location. Please try again later.</p>`;
    });
});
