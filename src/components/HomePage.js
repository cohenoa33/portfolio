import Home from "./Home";
import Contact from "./Contact";
import Resume from "./Resume";
import Social from "./Social";
import Projects from "./Projects";
import Skills from "./Skills";

const HomePage = () => {
  return (
    <div className="App">
      <Social />
      <Home />
      <Skills />
      <Projects />
      <Resume />
      <Contact section="contact" />
    </div>
  );
};

export default HomePage;
