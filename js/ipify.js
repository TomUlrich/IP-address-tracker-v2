// https://www.delftstack.com/de/howto/javascript/get-ip-address-javascript/



async function getIpClient() {
  try {
    const response = await axios.get('https://geo.ipify.org/api/v2/country,city?apiKey=at_1ufvcTi6RGdIVckywnulqDLHsRfa6&ipAddress=79.245.230.244');
    // const response = await axios.get('https://api.ipify.org?format=json');
    console.log(response.data.ip);
    console.log(response.data.location.region);
    console.log(response.data.location.city);
    console.log(response.data.location.postalCode);
    console.log(response.data.location.timezone);
    console.log(response.data.isp);
  } catch (error) {
    console.error(error);
  }
}

getIpClient();


