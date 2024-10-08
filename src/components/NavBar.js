import React,  { useState, useEffect }  from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";

import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/discord.svg';
import headerImg from "../assets/img/header-img.svg";
import { useAtom } from 'jotai';
import { activeLinkAtom } from '../atoms/activeLink.atom';

export default () => {
  const [activeLink, setActiveLink] = useAtom(activeLinkAtom);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          <img src={headerImg} alt="Header Img"/> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link className={activeLink === 'work' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('work')}>Work & achievements</Nav.Link>
              <Nav.Link className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link className={activeLink === 'profile' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('profile')}>About me</Nav.Link>
              {/* <Nav.Link className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link> */}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://discord.com/users/400084054852239361" target="_blank"><img src={navIcon3} alt="Discord" /></a>
                <a href="https://github.com/sordgom"target="_blank"><img src={navIcon2} alt="Github" /></a>
                </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>    
  )
}
