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

      <p className="mt-8">En caso de no poder enviarnos un email, puedes contactarnos directamente en el servidor de Discord:</p>

      {/* WidgetBot embed via iframe */}
      <div className="mt-6">
       <div className="mt-6 rounded-xl overflow-hidden shadow-lg w-full max-w-3xl mx-auto">
  <iframe
    title="WidgetBot Discord"
    src="https://e.widgetbot.io/channels/762312334642642984/1366796419188658379"
    width="100%"
    height="500"
    allowtransparency="true"
    frameBorder="0"
    className="w-full h-[500px]"
  ></iframe>
</div>

      </div>
    </section>
  );
};

export default Contacto;
