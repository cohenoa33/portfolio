import React from "react";
import "./App.css";
import { Route, NavLink, HashRouter } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <a href="#about">ABOUT</a>
          <a href="#home">Home</a>
          <div className="App">
            <Home />
            <About />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
