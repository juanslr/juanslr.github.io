import React from 'react';

const Contacto = () => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto text-center">
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
      <p>En caso de no poder enviarnos un email, podras ponerte en contacto con nosotros en el servidor</p>
      {/* Embed del WidgetBot */}
      <div className="mt-8">
        <WidgetBot
          server="TU_ID_DEL_SERVIDOR"
          channel="TU_ID_DEL_CANAL"
          width="100%"
          height="500px"
        />
      </div>

    </section>
  );
};

export default Contacto;
