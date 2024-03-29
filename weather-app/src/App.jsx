import { useState } from 'react';
import './App.scss';


const api = {
  key: "2c53b39ce25e6b123e0f32ecfef9f73d",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState ('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
          console.log(weather.name)
          // {weather.name}, {weather.sys.country}
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${year} ${month} ${date} ${day} `
  }

  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" onChange={e => setQuery(e.target.value)} 
          value={query}
          onKeyPress={search} placeholder='Search...'/>
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
            <div className="weather">{weather.weather[0].description}</div>
            <div className="weather">Wind speed {weather.wind.speed} km/h</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
