import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/twitter.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/discord.svg';
import navIcon4 from '../assets/img/youtube.svg';
import { HashLink } from 'react-router-hash-link';
import { Profile } from '../components/Profile';
import headerImg from "../assets/img/header-img.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
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
    <Router>
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
              <Nav.Link href=".#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              {/* <Nav.Link href="https://blog.nodex.codes" target="_blank" className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('blog')}>Blog</Nav.Link>
              <Nav.Link href="https://stake.nodex.codes" target="_blank" className={activeLink === 'stake' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('stake')}>Stake</Nav.Link>
              <Nav.Link href="https://explorer.nodex.codes" target="_blank" className={activeLink === 'stake' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('stake')}>Explorer</Nav.Link>              
              <Nav.Link href="https://jumper.nodex.codes" target="_blank" className={activeLink === 'jumper' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('stake')}>Jumper</Nav.Link>                            
              <Nav.Link href="#testnet" className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Testnet</Nav.Link> */}
              <Nav.Link href=".#profile" className={activeLink === 'profile' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('profile')}>Profile</Nav.Link>
              <Nav.Link href=".#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://discordapp.com/users/928575843641479198" target="_blank"><img src={navIcon3} alt="Discord" /></a>
                <a href="https://github.com/nodesxploit/testnet"target="_blank"><img src={navIcon2} alt="Github" /></a>
                <a href="https://twitter.com/nodexploit" target="_blank"><img src={navIcon1} alt="Twitter" /></a>
                <a href="https://youtube.com" target="_blank"><img src={navIcon4} alt="Youtube" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </Router>
    
  )
}
