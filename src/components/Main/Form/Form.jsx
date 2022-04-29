import "./form.css";
import gardener from "../../../images/gardener.png";
import kvadrat from "../../../images/kvadrat.png";
import circle from "../../../images/circle.png";

export default function Form() {
  return (
    <div className="form__wrapper">
      <img src={gardener} alt="avatar" />
      <img className="kvadrat" src={kvadrat} alt="avatar" />
      <img className="circle" src={circle} alt="avatar" />

      <h2>Still are you hesitating?</h2>

      <p>
        Your work is going to fill a large part of your life, and the only way
        to be truly satisfied.
      </p>
      <form className="form">
          <div className="form__name">
              <input type="text" placeholder="Enter your name"/>
              <input type="text" placeholder="Enter phone tel"/>
          </div>

          <textarea  cols="30" rows="10" placeholder="Enter your subject"/>

          <button type="submit">SEND MESSAGE</button>
      </form>
    </div>
  );
}
