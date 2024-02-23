// 86.109.250.101
// This code sends a request to the ipify API, which returns the IP address corresponding to the provided hostname.

function getIPAddress(url) {
    const hostname = new URL(url).hostname;
    const apiUrl = `https://api.ipify.org/?format=json&hostname=${hostname}`;

    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => data.ip)
        .catch(error => {
            console.error('Error fetching IP address:', error);
            throw error;
        });
}

// Example usage:
const websiteURL = 'https://www.kicker.de/';
getIPAddress(websiteURL)
    .then(ipAddress => {
        console.log(`IP address of ${websiteURL}: ${ipAddress}`);
    })
    .catch(error => {
        console.error(`Error: ${error.message}`);
    });
