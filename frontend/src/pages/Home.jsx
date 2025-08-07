import React from 'react';

const Home = () => {
  return (
    <section className="text-center py-20 px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">
        Bienvenido a RandomCord +
      </h2>
      <p className="text-lg mb-8">
        Una comunidad conectada por Discord y gamificada con un sistema de puntos.
      </p>
      <a
        href="https://discord.gg/GnRv8jCrEj"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
      >
        Únete a la Comunidad
      </a>
    </section>
  );
};
export default Home;
