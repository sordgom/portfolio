import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/discord.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/twitter.svg";
import 'animate.css';

export default () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <ul>
              <li> <span>Email:</span> aymaneigmiden@gmail.com </li>
              <li> <span >Resume:</span> <a href='https://docs.google.com/document/d/1ZZ6itkQhcH-j22W4Ak4MzFRPPbAq7Kr4kU21sTEkKb8/edit?usp=sharing' target="_blank">Google Docs Document</a> </li>
              <li> <span >LinkedIn:</span> <a href='https://www.linkedin.com/in/aymane-igmiden/' target="_blank">https://www.linkedin.com/in/aymane-igmiden/</a> </li>
              <li> <span >Github:</span> <a href='https://github.com/sordgom' target="_blank" >https://github.com/sordgom </a> </li>
              <li> <span >Devpost:</span> <a href='https://devpost.com/sordgom' target="_blank"> https://devpost.com/sordgom </a></li>
            </ul>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://discord.com/users/400084054852239361" target="_blank"><img src={navIcon3} alt="Discord" /></a>
              <a href="https://github.com/sordgom" target="_blank"><img src={navIcon2} alt="Github" /></a>
              <a href="https://twitter.com/sordgom" target="_blank"><img src={navIcon1} alt="Twitter" /></a>
            </div>
            <p>Credits to WannaCry</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
