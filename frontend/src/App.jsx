import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // 👈 importante
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Comunidad from './pages/Comunidad';
import Contacto from './pages/Contacto';
import UnsupportedBrowserModal from './UnsupportedBrowserModal';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <UnsupportedBrowserModal />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
