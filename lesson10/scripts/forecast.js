// Update this URL to your API call URL to openweather
 
// const weatherURL = "./data/3dayweather.json"
const LAT = 43.887093;
const LON = -111.6682194;
const APIKEY = "54df4c9bde5426fdac72c43334c05655";
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

const ONE_DAY = 24 * 60 * 60 * 1000

function showForecast(forecasts){
    // Get dates for next three days
    console.log(forecasts);
    let dates = []
    let mydate = new Date();
    for (let i=0; i < 3; i++){
        mydate = new Date(mydate.getTime() + ONE_DAY)
        nextdate = mydate.toISOString().slice(0, 10)
        dates.push(nextdate)
    }
    console.log(dates)
    
    // Find the object with the highest temperature for each day
    highTemps = dates.map((date) => forecasts
        .filter(x => x.dt_txt.startsWith(date))
        .reduce((currentObj, highObj) => currentObj.main.temp > highObj.main.temp ? currentObj : highObj)
    )    
    // Find the object with the lowest temperature for each day
    lowTemps = dates.map((date) => forecasts
        .filter(x => x.dt_txt.startsWith(date))
        .reduce((currentObj, lowObj) => currentObj.main.temp < lowObj.main.temp ? currentObj : lowObj)        
    )    
    console.log(highTemps)
    console.log(lowTemps)

    // Add the forecast information to the HTML document
    weatherElt = document.querySelector("body section")
    for (let i=0; i < 3; i++){
        let newsection = document.createElement("section");
        newsection.innerHTML = `<h2>${dates[i]}</h2><p>High: ${highTemps[i].main.temp.toFixed(0)}&deg;</p><p>Low: ${lowTemps[i].main.temp.toFixed(0)}&deg;</p>`
        weatherElt.append(newsection)
    }    
  
}

async function fetchForecast() {
    try {
      const response = await fetch(weatherURL);
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

fetchForecast()