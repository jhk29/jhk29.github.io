import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components/Home/Home";
import Timeline from "./components/Timeline/Timeline";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import FollowMe from "./components/FollowMe/FollowMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <FollowMe />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/timeline" component={Timeline} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </React.Fragment>
  );
}

export default App;