import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/2.png";
import { ArrowRightCircle, Quote } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {NavBar} from "./NavBar";
import {Footer} from "./Footer";
import { Document, Page } from 'react-pdf';
import resume from '../assets/pdf/resume.pdf';

export const Resume = () => {  
  return (
    <div className="main--profile">
      <NavBar/>
      <section className="profile" id="profile">
            <Container>
                <TrackVisibility>
                    <div className="resume">
                        <h2>Resume</h2>
                        <Document file={resume} >
                            <Page width="300" scale="3.8" pageNumber={1} />
                        </Document> 
                    </div>
                </TrackVisibility>
            </Container>
      </section>
      <Footer />
    </div>
  )
}
