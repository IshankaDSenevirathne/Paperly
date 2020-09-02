import React from "react";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Landing from "./components/Landing/Landing";

AOS.init();

function App() {
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
