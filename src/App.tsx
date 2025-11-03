import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import { Home, Contact, Resume, Social, Projects, Skills } from "./components";

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
            {/* <a href="#projects">Projects</a> */}
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="App">
            <Social />
            <Home />
            <Skills />
            <Resume />
            {/* <Projects /> */}
            <Contact section="contact" />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
