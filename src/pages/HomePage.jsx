import { useState, useEffect } from "react";
import mt1 from "../assets/imgs/mt1.png";
import mt2 from "../assets/imgs/mt2.png";
import mt3 from "../assets/imgs/mt3.png";
import mt4 from "../assets/imgs/mt4.png";
import clouds from "../assets/imgs/clouds.png";
import sunCloud from "../assets/imgs/sun-cloud.png";
import sun from "../assets/imgs/sun.png";

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollY);

  return (
    <div className="homepage">
      <img
        src={sun}
        alt="sun"
        className="sun"
        style={{ transform: `translate(0, ${scrollY * 2.0}px)` }}
      />
      <img
        src={sunCloud}
        alt="cloud"
        className="sun-cloud"
        style={{ transform: `translate(${scrollY * 2.0}px, 0)` }}
      />
      <img src={mt1} alt="mountain" className="mountain mt1" />
      <img src={mt2} alt="mountain" className="mountain mt2" />
      <div
        className="hp-text"
        style={{ transform: `translate(0, ${scrollY * 2.0}px)` }}
      >
        <h1 className="name">MARIDA UM</h1>
        <p className="title">SOFTWARE DEVELOPER</p>
      </div>
      <img src={mt3} alt="mountain" className="mountain mt3" />
      <img src={mt4} alt="mountain" className="mountain mt4" />
      <img
        src={clouds}
        alt="cloud"
        className="cloud"
        style={{ transform: `translate(${scrollY * 2.0}px, 0)` }}
      />
    </div>
  );
};

export default HomePage;
