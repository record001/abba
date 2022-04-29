import "./header.css";
import rightArrow from "../../images/arrow_right.svg";
import hero1 from "../../images/hero1.png";
import hero2 from "../../images/hero2.png";
import hero3 from "../../images/hero3.png";
import hero4 from "../../images/hero4.png";

import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <Navbar />

          <h1 className="header__title">ВСЕ ДЛЯ ТЕПЛИЦ</h1>

          <p className="header__text">
            Here will be brief information about our company and some of
            advantages of our offers. Here will be brief information about our
            company.
          </p>

          <a className="header__button" href="#!">
            explore <img src={rightArrow} alt="img" />
          </a>

          <img className="hero1 hero" src={hero1} alt="heros" />
          <img className="hero2 hero" src={hero2} alt="heros" />
          <img className="hero3 hero" src={hero3} alt="heros" />
          <img className="hero4 hero" src={hero4} alt="heros" />
        </div>
      </div>

      {/* <img className="line1" src={line1} alt="line" /> */}
    </header>
  );
}
