import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/discord.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/twitter.svg";
import navIcon4 from '../assets/img/youtube.svg';
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          {/* <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://discord.com/users/400084054852239361" target="_blank"><img src={navIcon3} alt="Discord" /></a>
                <a href="https://github.com/sordgom/portfolio"target="_blank"><img src={navIcon2} alt="Github" /></a>
                <a href="https://twitter.com/sordgom" target="_blank"><img src={navIcon1} alt="Twitter" /></a>
                <a href="https://youtube.com" target="_blank"><img src={navIcon4} alt="Youtube" /></a>
            </div>
            <p>Credits to WannaCry</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
