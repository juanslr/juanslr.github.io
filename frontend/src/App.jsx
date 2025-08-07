import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Minecraft from './pages/Minecraft';
import Contacto from './pages/Contacto';
import UnsupportedBrowserModal from './UnsupportedBrowserModal'; // Importamos el nuevo modal

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        {/* Mostrar advertencia si el navegador es incompatible */}
        <UnsupportedBrowserModal />

        {/* Barra de navegación */}
        <Navbar />

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Minecraft" element={<Minecraft />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
