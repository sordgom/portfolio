import React from 'react';
import { Container } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Document, Page } from 'react-pdf';
import resume from '../assets/pdf/resume.pdf';

export default() => {  
  return (
    <div className="main--profile">
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
    </div>
  )
}
