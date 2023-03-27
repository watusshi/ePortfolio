import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";

function ComingSoon() {
  return (
    <div className={styles.education}>
      <motion.div
        initial='init'
        animate='anim'
        exit='last'
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.eduOpen}>{eduOpen}</h3>
          <div className={styles.center_line}></div>
          {ExperienceData.map((item, index) => (
            <EducationCard
              key={item.title}
              title={item.title}
              date={item.date}
              details={item.details}
              isLeft={index % 2 === 0 ? true : false}
            />
          ))}
          <h3 className={styles.eduClose}>{eduClose}</h3>
        </div>
      </motion.div>
    </div>
  );
}

export default ComingSoon;
