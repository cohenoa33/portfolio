import React from "react";
import { Hero, Contact, Skills, Navbar } from "./components";


class App extends React.Component {

  navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  render() {
    return (
      <div className="min-h-screen bg-white text-black">
        <Navbar />
        <Hero />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
