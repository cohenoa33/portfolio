import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Social from "./components/Social";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false);
  }

  handleScroll() {
    let navbar = document.getElementById("navbar");
    if (!navbar) return;
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-50px";
    }
  }

  render() {
    return (
      <HashRouter>
        <div>
          <div id="navbar">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="App">
            <Social />
            <Home />
            <Skills />
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
