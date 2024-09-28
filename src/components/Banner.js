import React, { useState, useEffect } from 'react';
import Terminal from 'terminal-in-react';
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import headerImg from "../assets/img/header-img.svg";

export default () => {
  const current = new Date();
  const date = `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`;

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">{date}</span>
            <h1>{`Hi! I'm Aymane Igmiden⚡`} </h1>
            <h4>I'm a Backend engineer with 2 years of experience</h4>
            <Terminal
              color='white'
              backgroundColor='black'
              barColor='black'
              style={{ fontWeight: "bold", fontSize: "1em" }}
              commands={{
                'linkedin': () => window.open('https://www.linkedin.com/in/aymane-igmiden/', '_blank'),
                'github': () => window.open('https://github.com/sordgom', '_blank'),
                'devpost': () => window.open('https://devpost.com/sordgom', '_blank'),
                'email': () => 'aymaneigmiden@gmail.com',
              }}
              descriptions={{
                'linkedin': 'opens my linkedin profile',
                'github': 'opens my github profile',
                'devpost': 'opens my devpost profile',
                'email': 'shows my email address',
              }}
              msg='Welcome, I hope you can find something that catches your attention. enter `help` for more info.'
            />
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
