import React, { useEffect, useRef } from 'react';

const Contacto = () => {
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/html-embed';
    script.async = true;

    script.onload = () => {
      if (window.WidgetBot) {
        new window.WidgetBot({
          server: '762312334642642984',
          channel: '1366796419188658379',
          width: '800',
          height: '600',
          container: widgetContainerRef.current,
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-20 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">Contacto</h2>
      <p className="text-lg mb-8">¿Tienes dudas o sugerencias? ¡Queremos escucharte!</p>
      <form className="space-y-6">
        <input
          type="email"
          placeholder="Tu correo electrónico"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          placeholder="Escribe tu mensaje..."
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg"
        >
          Enviar
        </button>
      </form>
      <p className="mt-8">
        En caso de no poder enviarnos un email, podrás ponerte en contacto con nosotros en el servidor:
      </p>
      <div ref={widgetContainerRef} className="mt-4 mx-auto" />
    </section>
  );
};

export default Contacto;
