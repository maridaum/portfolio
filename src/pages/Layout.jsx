import Header from "../components/Header";
import HomePage from "./HomePage";
import About from "./About";
import Skills from "./Skills";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <HomePage id="home" />
      <About id="about" />
      <Skills id="skills" />
      {/* <Projects id="projects" />
      <Contact id="contact" /> */}
    </div>
  );
};

export default Layout;
