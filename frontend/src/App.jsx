import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Comunidad from './pages/Comunidad';
import Contacto from './pages/Contacto';
import UnsupportedBrowserModal from './UnsupportedBrowserModal';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <UnsupportedBrowserModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
