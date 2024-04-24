import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import travel from "../../Assets/International/travel.jpg";


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
              description="I've embarked on exhilarating journeys across continents, enriching my life with diverse experiences and vibrant cultures. 
              From the picturesque streets of France to the charming landscapes of Denmark, from the bustling cities of China to the serene beauty of Thailand's beaches, each destination has left an indelible mark on my soul. 
              With my family as steadfast companions, we've traversed through the historic alleys of Germany, cruised along the canals of the Netherlands, and wandered through the enchanting streets of Prague. 
              Our adventures have fostered deep bonds and created cherished memories, weaving a tapestry of shared experiences that transcend borders and time. With each trip, I've embraced the thrill of discovery, immersing myself in new cultures and forging connections that endure beyond the confines of geography."           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default International;
