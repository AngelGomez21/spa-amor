import React, { useState } from 'react';

function MiniApp({ volver }) {
  const mensajes = [
    'Te amo más de lo que imaginas 🤍',
    'Eres mi lugar seguro 💕',
    'Mi día mejora solo con pensarte 🌸',
    'Gracias por existir en mi vida ❤️',
    'Contigo todo tiene sentido ✨',
    'Eres lo mejor que me ha pasado 💖',
    'No importa el día, siempre te elijo 💫',
    'Tu sonrisa es mi debilidad 😊',
    'Amarte es lo más fácil del mundo 💞',
    'Siempre voy a estar para ti 🫶'
  ];

  const [indice, setIndice] = useState(-1);

  const mostrarMensaje = () => {
    setIndice(prev => (prev + 1) % mensajes.length);
  };

  return React.createElement(
    'div',
    { className: 'seccion miniapp' },

    React.createElement('p', { className: 'titulo' }, '💖 Mini app del amor'),

    React.createElement(
      'button',
      { className: 'btn-principal', onClick: mostrarMensaje },
      'Presiona aquí'
    ),

    indice !== -1 &&
      React.createElement(
        'p',
        { className: 'mensaje-amor' },
        mensajes[indice]
      ),

    React.createElement(
      'button',
      { className: 'btn-volver', onClick: volver },
      '⬅ Volver'
    )
  );
}

export default MiniApp;
