import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import metabuild from "../assets/img/metabuild.png";
import nearImg from "../assets/img/near.jpg";
import hmcImg from "../assets/img/homecrowd.png"
import bigPay from "../assets/img/bigpay.jpg";
import seek from "../assets/img/seek.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default () => {
  //List of projects
  const work = [
    {
      title: "SEEK",
      description: "Software Engineer",
      imgUrl: seek,
      link: "https://www.seek.com.au/"
    },
    {
      title: "BigPay",
      description: "Backend Engineer",
      imgUrl: bigPay,
      link: "https://bigpayme.com/"
    }, 
    {
      title: "SEED WEB3",
      description: "2nd place, Web2 to Web3 Track - NEAR MetaBUILD III Hackathon",
      imgUrl: metabuild,
      link: "https://devpost.com/software/seed-web3-career-hub-dhrazk"
    },
    {
      title: "SeedIn",
      description: "Winner of Future of Work Track - NEARCON IRL Hackathon",
      imgUrl: nearImg,
      link: "https://devpost.com/software/seed-web3-career-hub"
    },
    {
      title: "HomeCrowd",
      description: "Summer internship in a Defi company.",
      imgUrl: hmcImg,
      link: "https://myhomecrowd.com/"
    }
  ];

  return (
    <div className='main--work'>
      <section className="work" id="work">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                <div className= "">
                  <h2>Work & achievements</h2>
                  <p>This is a simple showcase of my work experiences and achievements</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className="">
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            work.map((project, index) => {
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
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    </div>
  )
}
