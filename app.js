
// const endpoint1 = 
const endpoint =
  "https://api.ipgeolocation.io/ipgeo?apiKey=9a10e5294dfc4e928d654e9b03ddd237";








// Function to fetch user's country based on IP address using ipgeolocation API

const fetchCountry = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log(data);
  return {
    country: data.country_name,
    time: data.time_zone.current_time,
  };
};

const postData = async () => {
  const result = await fetchCountry();
  const newTime = new Date(result.time);
  console.log(newTime);
  const serverTime = new Date().toUTCString();
  document.getElementById("timezone").innerHTML = `
      <marquee><p class="server-time">Consummate Traders server Time: ${serverTime}</p>, <p class="user-data">User's Country: ${result.country}, User's Time Zone: ${newTime}</p></marquee>
      `;
};

postData();

console.log(new Date());
