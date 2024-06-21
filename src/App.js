import React from "react";
import Weather from "./Weather";

import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather  />
      </header>
      <Footer />
    </div>
  );
}

export default App;
