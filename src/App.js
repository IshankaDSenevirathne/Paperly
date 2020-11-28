import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import QuizesPage from "./components/QuizesPage/QuizesPage";
import Landing from "./components/Land/Landing";
import Tos from "./components/tos/tos";
import SubjectMenu from "./components/subjectmenu/subjectmenu";
import SocialIcons from "./components/SocialIcons/SocialIcons";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

import ReactGA from "react-ga";
import history from "./ga/history";

import ttiPolyfill from "tti-polyfill";

ReactGA.initialize("G-GFF7NTCF2Z");

ttiPolyfill.getFirstConsistentlyInteractive().then((tti) => {
  ReactGA.timing({
    category: "Load Performace",
    variable: "Time to Interactive",
    value: tti,
  });
});

history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const loadPerformanceObservercallback = (list) => {
  list.getEntries().forEach((entry) => {
    ReactGA.timing({
      category: "Load Performace",
      variable: "Server Latency",
      value: entry.responseStart - entry.requestStart,
    });
  });
};

var observer = new PerformanceObserver(loadPerformanceObservercallback);
observer.observe({ entryTypes: ["navigation"] });

const performanceObservercallback = (list) => {
  list.getEntries().forEach((entry) => {
    if (entry.name.includes("App")) {
      ReactGA.timing({
        category: "App Render Performace",
        variable: entry.name,
        value: entry.duration,
      });
    }
  });
};

var observer = new PerformanceObserver(performanceObservercallback);
observer.observe({ entryTypes: ["mark", "measure"] });

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <SocialIcons />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/quizes" component={QuizesPage} />
          <Route path="/terms" component={Tos} />
          <Route path="/subjectmenu" component={SubjectMenu} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
