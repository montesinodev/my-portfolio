const apiKey = "98caee5e9cc88cbfe57f5c7e7a5cf296"; // Replace with your OpenWeatherMap API key
const weatherForm = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const weatherResult = document.getElementById("weather-result");

weatherForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city !== "") {
    getWeather(city);
    cityInput.value = "";
  }
});

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();

    if (data.cod === 200) {
      weatherResult.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
      `;
    } else {
      weatherResult.innerHTML = `<p>City not found. Please try again.</p>`;
    }
  } catch (error) {
    weatherResult.innerHTML = `<p>Error fetching weather data.</p>`;
    console.error(error);
  }
}
