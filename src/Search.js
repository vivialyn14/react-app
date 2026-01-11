import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");

  function searchCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    function getWeather(response) {
      setWeather({
        temperature: response.data.temperature.current,
        description: response.data.condition.description,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
      });
    }

    let apiKey = "1dd3bcb8741dt0aoe047389dbb6b5df4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(getWeather);
  }

  let weatherMessage = "";

  if (weather) {
    let items = [
      { label: "Temperature", value: `${Math.round(weather.temperature)} °C` },
      { label: "Conditions", value: weather.description },
      { label: "Humidity", value: `${Math.round(weather.humidity)} %` },
      { label: "Wind speed", value: `${Math.round(weather.wind)} km/h` },
    ];

    weatherMessage = (
      <div className="weather-message">
        <ul>
          {items.map((item) => (
            <li key={item.label}>
              {item.label}: {item.value}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    weatherMessage = "";
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={searchCity}
        />
        <input type="submit" value="Search" />
      </form>
      {weatherMessage}
    </div>
  );
}
