import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Harita from './Harita';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router basename="/3dmap">
      <Routes>
        <Route path="/" element={<Harita />} />
      </Routes>
    </Router>
  );
}

export default App;
