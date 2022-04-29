import "./main.css";
import Production from "./Production/Production";
import archa from "../../images/archa.png";
import About from "./About/About";
import bulut from "../../images/bulut.png";
import line2 from "../../images/line2.png";
import line3 from "../../images/line3.png";
import google from "../../images/logos_google.svg"
import microsoft from "../../images/logos_microsoft.svg"
import slack from "../../images/logos_slack.svg"
import wordpress from "../../images/logos_wordpress.svg"
import right_button from "../../images/right_button.svg"
import flags from "../../images/flags.png"
import World from "./World/World";
import Client from "./Client/Client";
import Form from "./Form/Form";

export default function Main() {
  return (
    <main className="main">
      <img className="archa" src={archa} alt="archa" />
      <img className="bulut" src={bulut} alt="bulut" />

      <div className="container">
        <Production />
        <About />
      </div>
      <div className="trustedBy">
        <img className="line3" src={line3} alt="line" />
        <img className="line2" src={line2} alt="line" />
        <div className="carousel">
             <a href="#!"> <img src={microsoft} alt="icon" /></a>
             <a href="#!"><img src={google} alt="icon" /></a> 
             <a href="#!"><img src={slack} alt="icon" /></a> 
             <a href="#!"><img src={wordpress} alt="icon" /></a> 
             <a href="#!"><img className="right_button" src={right_button} alt="icon" /></a> 
        </div>
      </div>


        <img className="flag" src={flags} alt="flags" />
        <div className="container">
          <World />
          <Client />
          <Form />
        </div>
    </main>
  );
}
