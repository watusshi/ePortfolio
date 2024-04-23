import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import travel from "../../Assets/International/travel.png";


function International() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          International <strong className="purple"> Mobility </strong>
        </h1>
        <p style={{ color: "white" }}>
        As an immigrant from Vietnam, I bring a rich tapestry of cultural understanding and a keen ability to adapt swiftly to new environments. 
        Having traversed different cultures, I possess a profound appreciation for diversity and a knack for bridging gaps between people. 
        My passion for computers and technology fuels my drive to innovate and explore the ever-evolving digital landscape. 
        Fluent in English, Vietnamese, and Chinese, I seamlessly navigate linguistic barriers, fostering connections and broadening my horizons. 
        My journey reflects resilience, curiosity, and a relentless pursuit of growth in both personal and professional spheres.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title=" Travel the world"
              description="I have the intent to visit all countries of the world and discover new things, and to be able to express with others differently. I haven't traveled yet to many countries, I have been in Morocco, France, Spain and Portugal, I really liked those experiences."           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default International;
