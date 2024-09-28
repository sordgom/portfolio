import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/2.png";
import { ArrowRightCircle, Quote } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Node Runner", "Crypto Enthusiast" ];
  const period = 2000;
  const current = new Date();
  const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
  
  return (
    <div className="main--profile">
      <section className="profile" id="profile">
        <Container>
        <Row>
            <Col size={12}>
              <TrackVisibility>
                <div className="">
                  <h2>Who am I?</h2>
                  <p>
                    My name is Aymane Igmiden. I am a Backend Engineer with 2 years of experience from Morocco.
                  </p>
                  <p>
                    The prospect of expanding my work experience and taking on new challenges excites me. And, I'm looking forward to hearing from you.
                  </p>
                  <h2>Skills</h2>
                    <h4>Programming Languages</h4>
                    <p>JavaScript, TypeScript, Rust, Java, SQL, Golang, Solidity</p>
                    <h4>Frameworks & Libraries</h4>
                    <p>React, Angular, Express, Node.js, MySQL, PostgreSQL, RESTful API</p>
                    <h4>Tools & Technologies</h4>
                    <p>Git, Docker, GCP, VS Code, Docker, Kubernetes, GitHub Actions, Kafka</p>
                    <h4>Languages</h4>
                    <p>English, French, Arabic, Tamazight, German</p>

                  <h2>Contact Information</h2>
                  <ul>
                    <li><ArrowRightCircle /> <span>Email:</span> aymaneigmiden@gmail.com </li>
                    <li><ArrowRightCircle /> <span >LinkedIn:</span> <a href='https://www.linkedin.com/in/aymane-igmiden/' target="_blank">https://www.linkedin.com/in/aymane-igmiden/</a> </li>
                    <li><ArrowRightCircle /> <span >Github:</span> <a href='https://github.com/sordgom' target="_blank" >https://github.com/sordgom </a> </li>
                    <li><ArrowRightCircle /> <span >Devpost:</span> <a href='https://devpost.com/sordgom' target="_blank"> https://devpost.com/sordgom </a></li>
                  </ul>
                </div>
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img"/>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
