import React, { useEffect, useState } from 'react';

const Comunidad = () => {
  const [status, setStatus] = useState(null);
  const [players, setPlayers] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch('https://api.mcsrvstat.us/2/casapmo.ddns.net:25565')
      .then(res => res.json())
      .then(data => {
        if (data.online) {
          setStatus('online');
          setPlayers(data.players.online);
        } else {
          setStatus('offline');
          setPlayers(0);
        }
      })
      .catch(() => {
        setStatus('offline');
        setPlayers(0);
      });
  }, []);

  const faqs = [
    {
      question: "¿Cómo me uno al servidor?",
      answer: "Solo necesitas añadir la IP en Minecraft --> minecraft.radomcord.es."
    },
    {
      question: "¿El servidor está abierto las 24 horas?",
      answer: "Sí, el servidor está online 24/7 salvo mantenimientos puntuales."
    },
    {
      question: "¿Hay normas en el servidor?",
      answer: "Si, aunque mientras no robes ni destruyas otras casas eres libre"
    },
    {
      question: "¿Cual es la version del servidor?",
      answer: "En estos momentos es la 1.21.7"
    },
        {
      question: "Tengo un problema, ¿donde pido ayuda?",
      answer: "Puedes pedir ayuda el discord en #tickets o enviarnos un correo mediante el apartado de contacto"
    },
  ];
  
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">Nuestra Comunidad</h2>
      <p className="text-lg mb-8">
        RandomCord es más que una web: es una comunidad activa en Discord, con sistema de puntos,
        eventos, y mucho más.
      </p>

      {/* Primer grid con 2 bloques */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-purple-300">Ip del servidor:</h3>
          <p>Tenemos un servidor de minecraft abierto 24/7</p>
          <p className="font-mono text-purple-300">minecraft.radomcord.es</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-purple-300">Estado del servidor:</h3>
          <p className="text-lg font-semibold text-white">
            {status === null
              ? '⏳ Cargando...'
              : status === 'online'
              ? '🟢 Online'
              : '🚧 En mantenimiento'}
          </p>
          {status === 'online' && (
            <p className="text-purple-200 mt-3">👥 Jugadores conectados: {players}</p>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 text-left">
        <h3 className="text-2xl font-bold mb-6 text-purple-400 text-center">Preguntas Frecuentes</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-lg">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center px-6 py-4 font-semibold text-purple-300 focus:outline-none"
              >
                {faq.question}
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F8512%2F8512921.png&f=1&nofb=1&ipt=1b320b508e1eaeb9aa010bbc96a8132a70b14af9048722e30620a23e4c185673"
                  alt="Minecraft block"
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comunidad;
