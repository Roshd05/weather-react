import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeather] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  

  function displayWeather(response) {
    setWeather({
      ready: true, 
      coordinates: response.data.coord,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event){
    setCity(event.target.value);
  }
   
  function search() {
  let apiKey = "215576bab28022db35e6e64f040e1b56";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
    }
    

 if(weatherData.ready) {
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          className="search-form-input"
          onChange={updateCity}
        />{" "}
        <input type="submit" value="Search" className="search-form-button" />
      </form>
      <WeatherInfo data={weatherData} />
      <WeatherForecast coordinates={weatherData.coordinates} />
    </div>
  );
 } else {
  search();
  return "Loading...";
 }
}