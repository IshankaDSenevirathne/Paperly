import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/navbar/navbar";
// import Landing from "./components/Landing/Landing";
import SurveyPages from "./components/SurveyPages/SurveyPages";
import QuizesPage from "./components/QuizesPage/QuizesPage";
import Questions from "./components/questions/questions";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Land/Landing";

AOS.init();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/survey" component={SurveyPages} />
          <Route path="/quizes" component={QuizesPage} />
          <Route path="/quiz" component={Questions} />
          {/* <Route path="*" component={Notfound} /> */}
        </Switch>
        {/* <Footer position="relative" /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
