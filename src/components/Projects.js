import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  //List of projects
  const blockchain_projects = [
    {
      title: "Agora DAO",
      description: "DAO for ideas",
      imgUrl: projImg1,
      link: "https://shorturl.at/quF56"
    },
    {
      title: "NFT Gallery",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://shorturl.at/quF56"
    },
    {
      title: "Retail-based private blockchain system",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://shorturl.at/quF56"
    },
  ];

  const data_science_projects = [
    {
      title: "Data Mining Project on an Elderly in Malaysia dataset",
      description: "Elderly dataset data mining",
      imgUrl: projImg2,
      link: "https://shorturl.at/quF56"
    }
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div className= "">
                <h2>Projects</h2>
                <p>This is a simple showcase of my projects and achievements</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Blockchain</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Data science</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Variety</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className="">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          blockchain_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          data_science_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming soon...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
