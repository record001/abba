import "./client.css";
import client from "../../../images/client.png";
import React, { useEffect, useState } from "react";
export default function Client() {
  const [story, setStory] = useState([]);
  useEffect(() => {
    fetch("https://alibaraka.pythonanywhere.com/api/stories/")
      .then((res) => res.json())
      .then((data) => {
        setStory(data);
      });
  }, []);

  let stories = story.map((item) => (
    <div className="scale" key={item.id}>
      <h4>{item.name}</h4>
      <p>
       {item.text}
      </p>
      <a href="#!">More Information</a>
    </div>
  ));

  return (
    <div className="client">
      <h3 className="client__title">How our client made 10x revenue</h3>
      <div className="client__wrapper">
        <div className="left">
          <img src={client} alt="avatar" />

          <div className="feedback">
            <h4>"I learned so much, even as a professional".</h4>
            <p>
              "Ut vehicula lacus a lacus tempor, nec viverra justo condimentum.
              Integer eu urna dapibus, scelerisque nisl non, semper ipsum. Etiam
              dolor arcu, tincidunt a arcu eget."
            </p>
            <h5 className="name">Juan Huang</h5>
          </div>

          <a className="moreStories" href="#!">
            more stories
          </a>
        </div>

        <div className="right">
          <h2>Other successful stories</h2>
          {stories}

          {/* <div className="scale">
            <h4>Amateur</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius.
            </p>
            <a href="#!">More Information</a>
          </div>
          <div className="scale">
            <h4>Beginner</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius.
            </p>
            <a href="#!">More Information</a>
          </div>
          <div className="scale">
            <h4>Professional</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius.
            </p>
            <a href="#!">More Information</a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
