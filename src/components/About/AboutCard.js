import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thai Lai </span>
            <br />Greetings! My name is Thai Lai, an Information Technology student at the University of Texas at Arlington, due to graduate May 2028. 


            <br />
            <br />My primary interest lies within technologies and coding. I am enthusiastic about advancing my pursuits in this field, both academically and professionally. I have proven the ability to leverage full-stack Software Engineer as well as experienced in design and building any graphics software from ground up.
            <br />
            <br />
            <br />Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(96, 136, 224)" }}>
            "The best error message is the one that never shows up."{" "}
          </p>
          <footer className="blockquote-footer">Thomas Fuchs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
