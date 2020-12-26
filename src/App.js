import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import QuizesPage from "./components/QuizesPage/QuizesPage";
import Landing from "./components/Land/Landing";
import Tos from "./components/tos/tos";
import SubjectMenu from "./components/subjectmenu/subjectmenu";
import SocialIcons from "./components/SocialIcons/SocialIcons";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Last from "./components/SurveyPages/CompletedSurvey";
import Contributors from "./components/contributors/contributors";
import NotFound from "./components/notFound/notFound";

import ReactGA from "react-ga";
// import history from "./ga/history";
// import { createBrowserHistory } from "history";
import ttiPolyfill from "tti-polyfill";

// let history =  createBrowserHistory();

ReactGA.initialize("UA-184133338-1");

ttiPolyfill.getFirstConsistentlyInteractive().then((tti) => {
  console.log(tti);

  ReactGA.timing({
    category: "Load Performace",
    variable: "Time to Interactive",
    value: tti,
  });
});

// history.listen((location) => {
//   console.log(location);
//   ReactGA.set({ page: location.pathname });
//   ReactGA.pageview(location.pathname);
// });

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
  const [hideFooterandNavbar, sethideFooterandNavbar] = useState(false);

  useEffect(() => {
    // This line will trigger on a route change
    // console.log(window.location.pathname + window.location.search);
    ReactGA.pageview(window.location.pathname + window.location.search);

    console.log(window.location.pathname);

    if (window.location.pathname === "/404") {
      sethideFooterandNavbar(true);
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        {hideFooterandNavbar ? null : <Navigation />}
        {hideFooterandNavbar ? null : <SocialIcons />}

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/quizes" component={QuizesPage} />
          <Route path="/terms" component={Tos} />
          <Route path="/subjectmenu" component={SubjectMenu} />
          <Route path="/last" component={Last} />
          <Route path="/contributors" component={Contributors} />
          <Route path="/404" component={NotFound} />
        </Switch>
        {hideFooterandNavbar ? null : <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
