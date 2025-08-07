import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-400">RandomCord</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-purple-400">Inicio</Link>
          <Link to="/comunidad" className="hover:text-purple-400">Comunidad</Link>
          <Link to="/contacto" className="hover:text-purple-400">Contacto</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
