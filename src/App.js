import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Testnet } from "./components/Testnet";
import { Profile } from "./components/Profile";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <Testnet /> */}
      <Profile />
      {/* <Team/> */}
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
