import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Landing from "./components/Landing/Landing";
import Questions from "./components/questions/questions";

AOS.init();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/quiz/:id" component={Questions} />
          {/* <Route path="*" component={Notfound} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
