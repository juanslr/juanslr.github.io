import React from 'react';

const Comunidad = () => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">Nuestra Comunidad</h2>
      <p className="text-lg mb-8">
        RandomCord es más que una web: es una comunidad activa en Discord, con sistema de puntos,
        eventos, y mucho más.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-purple-300">Sistema de Puntos</h3>
          <p>Participa, gana puntos y sube de nivel en nuestro ranking comunitario.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-purple-300">Bot Integrado</h3>
          <p>Consulta tus puntos, gana recompensas y más desde Discord directamente.</p>
        </div>
      </div>
    </section>
  );
};

export default Comunidad;
