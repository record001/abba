import "./about.css";
import about1 from "../../../images/about1.png"
import about2 from "../../../images/about2.png"
import trak from "../../../images/trak.png"

export default function About() {
  return (
    <div className="about">

        <img className="trak" src={trak} alt="trak" />
        <img className="about1" src={about1} alt="about1" />
        <img className="about2" src={about2} alt="about2" />

      <h2>little ABout our company </h2>

      <p>
        "Your work is going to fill a large part of your life, and the only way
        to be truly satisfied is to do what you believe is great work. And the
        only way to do great work is to love what you do."
      </p>

      <div className="about__links">
          <a href="#!">MORE ABOUT</a>
          <a href="#!">OUR YOUTUBE</a>
      </div>
    </div>
  );
}
