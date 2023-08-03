import React from "react";
import VerticalTimeline from "./VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimelineElement";
import './VerticalTimeline.css';
import './VerticalTimelineElement.css';
import { IoMdSchool,IoMdBriefcase } from "react-icons/io";



function Education() {
  return (
    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(17, 75, 122)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2023 June - 2023 July"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">Intern - Energy Consumption in Matrix Computations Using Compressed Data</h3>
    <h4 className="vertical-timeline-element-subtitle">ENAC, Toulouse, France</h4>
    <p>
      A 6-week internship on "Evaluating Energy Consumption in Matrix Computations Using Compressed Data." 💻📚 During this journey, I explored advanced scientific computing techniques and sustainable solutions for handling massive data sets.
    </p>
  </VerticalTimelineElement>

      
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">ENSEEIHT N7 - SN | Computer science Student</h3>
    <h4 className="vertical-timeline-element-subtitle">Toulouse, France</h4>
    <p>
      I joined The École nationale supérieure d'électrotechnique, d'électronique, d'informatique, d'hydraulique et des télécommunications (ENSEEIHT) which is a French engineering school (Grande École) which offers Computer Science and Telecommunications.
      
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2020 - 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">CPGE Saint-Benoit Angers | MPSI-PSI </h3>
    <h4 className="vertical-timeline-element-subtitle">Angers, France</h4>
    <p>
      The course is a balance between mathematics, physical sciences, computer science and industrial sciences, which ideally prepares for future engineering professions.
    </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">High school diploma | Mention très bien</h3>
    <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4>
    <p>
      Option : Science mathématiques B
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
  );
}

export default Education;
