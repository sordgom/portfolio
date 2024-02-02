import React, { useState, useEffect } from 'react';
import Terminal from 'terminal-in-react';
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Node Runner", "Crypto Enthusiast" ];
  const period = 2000;
  const current = new Date();
  const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
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
              </div>}
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
  )
}
