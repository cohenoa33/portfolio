import React from "react";
import "./App.css";
import { Route, NavLink, HashRouter } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div id="navbar" className="sticky">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="App">
            <Home />
            <About />
            <Contact section="contact" />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
