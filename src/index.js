import React from "react";
import ReactDOM from "react-dom";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <h3>
        <a href="https://github.com/Jumperchick11/weather-react.git" 
        target="_blank" rel="noreferrer">Open-source code</a> by, 
        Bethany Nixon
        </h3>
      </div>
    
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

