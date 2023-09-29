import { Link, animateScroll } from "react-scroll";

const Header = () => {
  return (
    <header>
      <h1
        onClick={() => animateScroll.scrollToTop({ duration: 800 })}
        className="logo"
      >
        MU
      </h1>
      <nav>
        <Link to="about" smooth={true} duration={800} className="nav-link">
          About
        </Link>
        <Link to="skills" smooth={true} duration={800} className="nav-link">
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={800} className="nav-link">
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={800} className="nav-link">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
