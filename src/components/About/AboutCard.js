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
            <br />Greetings! My name is Thai Lai, an Information Technology student at the University of Texas at Arlington, due to graduate May 2025. My primary interest lies within technologies and coding. I am enthusiastic about advancing my pursuits in this field, both academically and professionally. I have proven the ability to leverage full-stack Software Engineer as well as experienced in design and building any graphics software from ground up.


            <br />
            <br />This portfolio seeks to best convey my character, my professional trajectory, and my future goals. You can find information about my experiences, initiatives, and skills, both professionally and personally. Please get in touch with me if you want additional information about my experience or the projects I worked on.
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
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(96, 136, 224)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abdelmouhaimen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
