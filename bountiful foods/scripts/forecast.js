const apiKey = '54df4c9bde5426fdac72c43334c05655';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=' + apiKey;

const ONE_DAY = 24 * 60 * 60 * 1000;

function showForecast(forecasts) {
  // Get dates for next three days
  let mydate = new Date();
  let dates = [];
  
  for (let i = 0; i < 3; i++) {
    mydate = new Date(mydate.getTime() + ONE_DAY);
    nextdate = mydate.toISOString().slice(0, 10);
    dates.push(nextdate);
  }

  // Find the object with the highest and lowest temperatures for each day
  const highTemps = dates.map((date) =>
    forecasts
      .filter((x) => x.dt_txt.startsWith(date))
      .reduce((prev, next) => (prev.main.temp > next.main.temp ? prev : next))
  );

  const lowTemps = dates.map((date) =>
    forecasts
      .filter((x) => x.dt_txt.startsWith(date))
      .reduce((prev, next) => (prev.main.temp < next.main.temp ? prev : next))
  );

  // Add the forecast information to the HTML document
  const weatherElt = document.querySelector("main .weather-card #forecastCard #forecastContainer");
  weatherElt.innerHTML = ''; // Clear previous content
  
  for (let i = 0; i < 3; i++) {
    let newsection = document.createElement("section");
    newsection.style.display = "inline-block";
    const highTempKelvin = highTemps[i].main.temp;
    const lowTempKelvin = lowTemps[i].main.temp;
    const highTempFahrenheit = (highTempKelvin - 273.15) * 9/5 + 32;
    const lowTempFahrenheit = (lowTempKelvin - 273.15) * 9/5 + 32;
  
    newsection.innerHTML = `<h5>${dates[i]}</h5><p>High: ${highTempFahrenheit.toFixed(0)}&deg;F</p><p>Low: ${lowTempFahrenheit.toFixed(0)}&deg;F</p>`;
    weatherElt.append(newsection);
  }
}

async function fetchForecast() {
  try {
    const response = await fetch(forecastURL);
    if (response.ok) {
      const data = await response.json();
      showForecast(data.list);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Wait for the DOM content to be loaded before fetching and displaying the forecast
document.addEventListener('DOMContentLoaded', () => {
  fetchForecast();
});
