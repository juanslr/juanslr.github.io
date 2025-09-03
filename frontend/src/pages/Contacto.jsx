import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MessageCircle, Mail } from 'lucide-react';

// Inicializa EmailJS con tu clave pública
emailjs.init('RtF5rpfeYudvW6Tq4');

const Contacto = () => {
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [nombre, setNombre] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // 1️⃣ Enviar correo a tu bandeja de entrada
    emailjs.send(
      'service_41fa1m2',
      'template_1xi88ui', // plantilla para ti
      {
        from_name: nombre,
        from_email: email,
        message: mensaje,
        title: 'Mensaje desde RandomCord'
      }
    )
    .then(() => {
      // 2️⃣ Enviar correo de confirmación al usuario
      return emailjs.send(
        'service_41fa1m2',
        'template_19e614r', // plantilla para el usuario
        {
          user_email: email,   // debe coincidir con {{user_email}} en la plantilla
          user_name: nombre    // debe coincidir con {{user_name}}
        }
      );
    })
    .then(() => {
      setStatus('✅ ¡Mensaje enviado con éxito! Revisa tu correo para confirmación.');
      setNombre('');
      setEmail('');
      setMensaje('');
    })
    .catch(() => {
      setStatus('❌ Error al enviar. Intenta más tarde.');
    });
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 rounded-3xl shadow-2xl p-10 text-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <MessageCircle className="w-12 h-12 text-purple-300" />
          <h2 className="text-4xl font-extrabold text-white">¡Contáctanos!</h2>
          <p className="text-purple-200 text-lg">
            Forma parte de nuestra comunidad y comparte tus ideas, dudas o sugerencias.
          </p>
        </div>

        {/* Formulario */}
        <form className="space-y-6" onSubmit={sendEmail}>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
            className="w-full p-4 rounded-lg bg-purple-950/40 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo electrónico"
            className="w-full p-4 rounded-lg bg-purple-950/40 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            required
          />
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escribe tu mensaje..."
            className="w-full p-4 rounded-lg bg-purple-950/40 text-white border border-purple-500 h-32 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            required
          />
          <button
            type="submit"
            className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-700/50"
          >
            <Mail className="inline-block mr-2 w-5 h-5" />
            Enviar mensaje
          </button>
        </form>

        {/* Estado */}
        {status && <p className="mt-4 text-purple-200">{status}</p>}

        {/* Discord */}
        <div className="mt-10">
          <p className="text-purple-300 mb-4">¿Prefieres hablar directo? Únete a nuestro Discord:</p>
          <div className="rounded-xl overflow-hidden border border-purple-600 shadow-lg">
            <iframe
              src="https://e.widgetbot.io/channels/762312334642642984/1366796419188658379"
              height="400"
              width="100%"
              allowTransparency="true"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
