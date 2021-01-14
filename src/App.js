import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Social from "./components/Social";
import Projects from "./components/Projects";

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
        <div>
          <div id="navbar">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
            <Social size="lg" color="#f2f2f2" />
          </div>
          <div className="App">
            <Home />

            <Projects />
            <Resume />
            <Contact section="contact" />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
