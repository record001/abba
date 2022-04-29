import "./world.css";
import React  from "react";
// import plus from "../../../images/plus.svg"
import plus1 from "../../../images/plus1.svg"

export default function World() {

  return (
    <div className="world">
      <h2>See why we are trusted the world over</h2>
      <p>
        The first rule of any technology used in a business is that automation
        applied to an efficient operation will magnify the efficiency.
      </p>

      <div className="world__ask">
        <div className="top"></div>
        <div className="right"></div>
        <div className="bottom"></div>
        <div className="left"></div>
            <div className="question">
                <h4>Do you provide customer support?</h4>
                <img src={ plus1} alt="plus" />
            </div>
            <div className="question">
                <h4>How much traffic can the hosting handle?</h4>
                <img src={ plus1} alt="plus" />
            </div>
            <div className="question">
                <h4>Do you have any questions for us?</h4>
                <img src={ plus1} alt="plus" />
            </div>
            <div className="question">
                <h4>What is your return policy?</h4>
                <img src={ plus1} alt="plus" />
            </div>
      </div>
    </div>
  );
}
