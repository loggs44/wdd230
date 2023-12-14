/* My API Key: 54df4c9bde5426fdac72c43334c05655 */

function kelvinToFahrenheit(kelvin) {
  return Math.round(((kelvin - 273.15) * 9/5 + 32).toFixed(2));
}

function getWeather() {
  const apiKey = '54df4c9bde5426fdac72c43334c05655';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=' + apiKey;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const temperature = kelvinToFahrenheit(data.main.temp);
          const condition = data.weather[0].description;
          const iconCode = data.weather[0].icon;
          const humidity = data.main.humidity;

          // Update HTML elements with weather data
          document.getElementById('temperature').textContent = `Temperature: ${temperature}°F`;
          document.getElementById('condition').textContent = `Condition: ${condition}`;
          document.getElementById('weatherIcon').src = `https://openweathermap.org/img/w/${iconCode}.png`;
          document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
      })
      .catch(error => console.error('Error fetching weather data:', error));
}

// Initial fetch when the page loads
document.addEventListener('DOMContentLoaded', getWeather);

function kelvinToFahrenheit(kelvin) {
  return Math.round(((kelvin - 273.15) * 9/5 + 32));
}

function kelvinToFahrenheit(kelvin) {
  return Math.round(((kelvin - 273.15) * 9/5 + 32));
}

function getForecast() {
  const apiKey = '54df4c9bde5426fdac72c43334c05655';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=' + apiKey;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const forecastContainer = document.getElementById('forecastContainer');
          forecastContainer.innerHTML = ''; // Clear previous forecast data

          // Get the forecast data for 9:00 AM for the next three days (not including today)
          const forecastData = data.list.filter(item => {
              const forecastTime = new Date(item.dt * 1000);
              return forecastTime.getHours() === 9 && forecastTime.getDate() !== new Date().getDate();
          }).slice(0, 3);

          // Display forecast data
          forecastData.forEach(item => {
              const temperature = kelvinToFahrenheit(item.main.temp);
              const condition = item.weather[0].description;
              const iconCode = item.weather[0].icon;

              // Create forecast card
              const forecastCard = document.createElement('div');
              forecastCard.classList.add('forecast-card');
              forecastCard.innerHTML = `
                  <p>Date: ${new Date(item.dt * 1000).toLocaleDateString()}</p>
                  <p>Time: 9:00 AM</p>
                  <p>Temperature: ${temperature}°F</p>
                  <p>Condition: ${condition}</p>
                  <img src="https://openweathermap.org/img/w/${iconCode}.png" alt="Weather Icon" class="forecast-icon">
              `;

              forecastContainer.appendChild(forecastCard);
          });
      })
      .catch(error => console.error('Error fetching forecast data:', error));
}

// Initial fetch when the page loads
document.addEventListener('DOMContentLoaded', getForecast);