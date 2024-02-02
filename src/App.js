import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import { Profile } from "./components/Profile";
import { Resume } from "./components/Resume";
import { Projects } from "./components/Projects";
import { Work } from "./components/Work";
import { Home } from "./components/Home";

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
