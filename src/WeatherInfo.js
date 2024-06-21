import React, { useState } from "react";





  export default function WeatherInfo(props) {
    let weatherData = {
      city: "Caracas",
      temperature: 20,
      date: "Wednesday 7:00",
      description: "Sunny",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      humidity: 60,
      wind: 10,
    };

    return (
      <div className="weather-app">
        <header>
          <form className="search-form">
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="search-form-input"
            />
            <input
              type="submit"
              value="Search"
              className="search-form-button"
            />
          </form>
        </header>
        <main>
          <div className="weather-app-data">
            <div>
              <h1 className="weather-app-city">{weatherData.city}</h1>
              <p className="weather-app-details">
                <br />
                <div>
                  {" "}
                  {weatherData.date} {weatherData.description}
                </div>
                <div>Humidity: {weatherData.humidity}%</div>
                <div>Wind: {weatherData.wind} km/h</div>
              </p>
            </div>
            <div className="weather-app-temperature-container">
              <div></div>
              <div className="weather-app-temperature">
                {" "}
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="float-left"
                />
                {weatherData.temperature}°C
              </div>
            </div>
          </div>
          <div className="weather-forecast"></div>
        </main>
      </div>
    );
  }

