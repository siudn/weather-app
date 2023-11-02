const city = document.querySelector("#city");
const submitButton = document.querySelector("#submit");
const main = document.querySelector("#data");
const cityName = document.querySelector("#cityText");
const cond = document.querySelector("#cond");
const tempInF = document.querySelector("#tempInF");
const feelsLike = document.querySelector("#feelsLike");
const tempInC = document.querySelector("#tempInC");
let weatherData = [];

async function getData(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=bace7c4073c446cd8ab154016230211&q=${city}`,
    { mode: "cors" }
  );
  weatherData = await response.json();
}

async function printData(city) {
  await getData(city);
  cityName.textContent = `Location: ${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`;
  cond.textContent = `${weatherData.current.condition.text}`;
  tempInF.textContent = `Temperature (F): ${weatherData.current.temp_f}`;
  feelsLike.textContent = `Feels like (F): ${weatherData.current.feelslike_f}`;
  tempInC.textContent = `Temperature (C): ${weatherData.current.temp_c}`;
}

submitButton.addEventListener("click", () => {
  printData(city.value);
});
