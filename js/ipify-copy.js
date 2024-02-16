// https://www.delftstack.com/de/howto/javascript/get-ip-address-javascript/

document.addEventListener('DOMContentLoaded', function () {
  // Selecting the form element
  const formElement = document.querySelector('.ip-input');

  // Adding event listener for form submission
  formElement.addEventListener('submit', function (event) {
    // Preventing the default form submission behavior
    event.preventDefault();

    // Selecting the input element
    const inputElement = document.querySelector('.ip--input-text');

    // Storing the input value in a JavaScript variable
    const inputValue = inputElement.value;
    console.log('Input value:', inputValue);

    // You can do further processing with inputValue
    async function getIpClient() {
      try {
        const response = await axios.get(
          'https://geo.ipify.org/api/v2/country,city?apiKey=at_1ufvcTi6RGdIVckywnulqDLHsRfa6&ipAddress=79.245.230.244'
        );
        const dataObject = {
          ip: response.data.ip,
          city: response.data.location.city,
          region: response.data.location.region,
          postalCode: response.data.location.postalCode,
          timezone: response.data.location.timezone,
          isp: response.data.isp,
        };
        // return dataObject;
        console.log(dataObject);
      } catch (error) {
        console.error(error);
      }
    }
    getIpClient();

    // Resetting the form
    // formElement.reset();
  });
});
