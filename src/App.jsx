import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main';
import Avisos from './components/Header/Sections/Avisos-viales';
import Paraderos from './components/Header/Sections/Paraderos';
import Ayuda from './components/Header/Sections/Ayuda';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/avisos" element={<Avisos />} />
        <Route path="/paraderos" element={<Paraderos />} />
        <Route path="/ayuda" element={<Ayuda />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
