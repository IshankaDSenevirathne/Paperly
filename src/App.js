import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/navbar/navbar";
// import Landing from "./components/Landing/Landing";
import QuizesPage from "./components/QuizesPage/QuizesPage";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Land/Landing";
import Tos from "./components/tos/tos";

AOS.init();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/quizes" component={QuizesPage} />
          <Route path="/terms" component={Tos} />
          {/* <Route path="*" component={Notfound} /> */}
        </Switch>
        {/* <Footer position="relative" /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
// <Footer position="relative" />
