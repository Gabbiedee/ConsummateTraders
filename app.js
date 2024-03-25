const API_Key = "923db7e4fad64411be114631d70f233e";
const endpoint1 = `https://openexchangerates.org/api/latest.json?app_id=${API_Key}&base=USD&symbols=NGN`;
const endpoint =
  "https://api.ipgeolocation.io/ipgeo?apiKey=9a10e5294dfc4e928d654e9b03ddd237";

// Function to fetch current exchange rate 1 usd to naira

const FetchExchnageRate = async () => {
  const res = await fetch(endpoint1);
  const data = await res.json();
  return {
    base: data.base,
    Current_Rate: data.rates,
  };
};

// Function to fetch user's country based on IP address using ipgeolocation API

const fetchCountry = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();
  return {
    country: data.country_name,
    time: data.time_zone.current_time,
  };
};

const postData = async () => {
  const result = await fetchCountry();
  const rateResult = await FetchExchnageRate();
  const Naira = Math.round(rateResult.Current_Rate.NGN);
  const newTime = new Date(result.time);
  const serverTime = new Date().toUTCString();
  document.getElementById(
    "exchange-rate"
  ).innerHTML = `Current Rate <span class="naira-rate"> 1 </span> ${rateResult.base} = <span class="naira-rate">NGN${Naira}</span>`;
  document.getElementById("timezone").innerHTML = `
      <marquee><p class="server-time">Consummate Traders server Time: ${serverTime}</p> <p class="user-data">User's Country: ${result.country}. User's Time Zone: ${newTime}.</p></marquee>
      `;
};

postData();
