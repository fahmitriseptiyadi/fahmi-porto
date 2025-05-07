import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/iotfire.png";
import projImg2 from "../assets/img/iothydroponic.png";
import projImg3 from "../assets/img/proj_plate_recognition.png";
import projImg4 from "../assets/img/proj_web_sepatu.png";
import projImg5 from "../assets/img/proj_deskop_shoesales.png";
import projImg6 from "../assets/img/proj_deskop_javashoe.png";
import projImg7 from "../assets/img/proj_web_texttospeech.png";
import projImg8 from "../assets/img/proj_web_laravel_reservation.png";
import projImg9 from "../assets/img/proj_mobile_mart.png";
import projImg10 from "../assets/img/proj_mobile_e-raport.png";
import projImg11 from "../assets/img/proj_deskop_ml.png";
import eduImg1 from "../assets/img/ppsb.png";
import eduImg2 from "../assets/img/itenas.png";
import expImg1 from "../assets/img/ai.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "IoT Fire Prevention",
      description: "Development",
      imgUrl: projImg1,
    },
    {
      title: "IoT Smart Hydroponic",
      description: "Development",
      imgUrl: projImg2,
    },
    {
      title: "Python Plate Recognition",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "FootFetish Web",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Desktop POS Shoe",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Desktop Java Shoe",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "Text To Speech Web",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "Laravel Cafe Reservation Web",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      title: "Mobile Mart",
      description: "Design & Development",
      imgUrl: projImg9,
    },
    {
      title: "Mobile E-Raport",
      description: "Design & Development",
      imgUrl: projImg10,
    },
    {
      title: "Desktop President 2024 Analyst",
      description: "Design & Development Python & R",
      imgUrl: projImg11,
    },
  ];

  const educations = [
    {
      title: "Pondok Pesantren Sumber Barokah Karawang",
      description: "Non Formal",
      imgUrl: eduImg1,
    },
    {
      title: "Informatics - ITENAS",
      description: "Bachelor's Degree (2020 - 2025)",
      imgUrl: eduImg2,
    },

  ];
  const experiences = [
    {
      title: "Huawei",
      description: "HCIA-AI",
      imgUrl: expImg1,
      link: "https://e.huawei.com/en/talent/#/cert/product-details?certifiedProductId=345&authenticationLevel=CTYPE_CARE_HCIA&technicalField=BSH",
    },


  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>Here are some of my featured projects, educational background, and work experiences.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Educations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Experiences</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {educations.map((education, index) => (
                          <ProjectCard key={index} {...education} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>An investment in knowledge pays the best interest - Benjamin</p>
                      <Row>
                        {experiences.map((experiences, index) => (
                          <ProjectCard key={index} {...experiences} />
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
}
