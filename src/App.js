import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Caracas" />
<br />

        <footer>
          <strong>
            This project was coded by <br />
            <a
              href="https://github.com/Roshd05"
              target="_blank"
              rel="noreferrer"
            >
              Roshni Daryanani{" "}
            </a>
            is{" "}
            <a
              href="https://github.com/Roshd05/weather-homework"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced on GitHub
            </a>
            <br />
            and{" "}
            <a
              href="https://clima-roshni.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Hosted on Netlify
            </a>
          </strong>
        </footer>
      </div>
    </div>
  );
}
