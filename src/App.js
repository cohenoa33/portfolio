import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Social from "./components/Social";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ResumePdf from "./components/ResumePdf";
import HomePage from "./components/HomePage";

class App extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  }

  render() {
    return (
      <HashRouter>
        {" "}
        <Router>
          <Route exact path="/" render={() => <HomePage />} />
        </Router>
        <Router>
          <Route path="/noa-rabin-cohen-resume" render={() => <ResumePdf />} />
        </Router>
        <div>
          <div id="navbar">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
