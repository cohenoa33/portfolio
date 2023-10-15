import React from "react";
import "./App.scss";
import { HashRouter } from "react-router-dom";
import { Home, Contact, Resume, Social, Projects, Skills } from "./components";

export default function App() {
  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll, { passive: true });
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll, false);
  // }

  // handleScroll() {
  //   let navbar = document.getElementById("navbar");
  //   if (!navbar) return;
  //   if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     navbar.style.top = "0";
  //   } else {
  //     navbar.style.top = "-50px";
  //   }
  // }

  // render() {
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
  // }
}
