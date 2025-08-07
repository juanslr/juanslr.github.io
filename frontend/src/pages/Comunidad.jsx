import React, { useEffect, useState } from 'react';

const Comunidad = () => {
  const serverIP = 'casapmo.ddns.net:25565'; // ← Cambia esto por la IP o dominio de tu servidor real
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
        const data = await response.json();
        setStatus(data);
      } catch (error) {
        console.error('Error al obtener el estado del servidor:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">Nuestra Comunidad</h2>
      <p className="text-lg mb-12">
        RandomCord es más que una web: es una comunidad activa en Discord, con sistema de puntos,
        eventos, y mucho más.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-purple-300">Servidor de minecraft</h3>
          <p>Tenemos un servidor de minecraft abierto 24/7</p>
          IP del Servidor: <span className="font-mono text-purple-300">{serverIP}</span>

        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-purple-300">Estado del servidor:</h3>
          {loading ? (
          <p className="text-gray-400">Cargando estado...</p>
        ) : status?.online ? (
          <>
            <p className="text-green-500 font-semibold">🟢 En línea</p>
            <p>
              Jugadores conectados: {status.players?.online ?? 0} / {status.players?.max ?? 0}
            </p>
            {status.motd?.clean && (
              <p className="italic mt-2 text-gray-400">"{status.motd.clean.join(' ')}"</p>
            )}
          </>
        ) : (
          <p className="text-red-500 font-semibold">🔴 Servidor fuera de línea</p>
        )}
        </div>
      </div>
      <div className="w-full aspect-video">
        <iframe
          src="http://casapmo.ddns.net:10101/"
          title="CasaPMO"
          className="w-full h-full border-2 border-purple-500 rounded-lg"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Comunidad;
