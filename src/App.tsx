import React, { useEffect, useState } from "react";
import { Hero, Contact, Skills, Navbar } from "./components";

class App extends React.Component<{}, { isDark: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDark: false
    };
  }

  componentDidMount() {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isDark = savedTheme ? savedTheme === "dark" : prefersDark;

    this.setState({ isDark });
    this.applyTheme(isDark);
  }

  applyTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  toggleDarkMode = () => {
    this.setState(
      (prevState) => ({ isDark: !prevState.isDark }),
      () => this.applyTheme(this.state.isDark)
    );
  };

  navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  render() {
    return (
      <div className="min-h-screen transition-colors duration-200 bg-(--bg-primary) text-(--text-primary)">
        <Navbar
          isDark={this.state.isDark}
          onToggleDarkMode={this.toggleDarkMode}
        />
        <Hero />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
