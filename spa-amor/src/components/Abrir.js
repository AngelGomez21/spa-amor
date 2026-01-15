import React, { useState } from 'react';

function Abrir({ volver }) {
  const cartas = [
    { titulo: 'Abre cuando te sientas sola', mensaje: 'Nunca estás sola 🤍' },
    { titulo: 'Abre cuando ya no puedas', mensaje: 'Eres más fuerte de lo que crees 💪' },
    { titulo: 'Abre cuando estés triste', mensaje: 'Aquí estoy para ti 🤗' },
    { titulo: 'Abre cuando dudes de mi amor', mensaje: 'Te amo sin dudas ❤️' },
    { titulo: 'Abre cuando discutamos', mensaje: 'Nuestro amor es más fuerte 💞' },
    { titulo: 'Abre cuando necesites motivación', mensaje: 'Estoy orgulloso de ti 🌟' },
    { titulo: 'Abre cuando me extrañes', mensaje: 'Yo también te extraño 💕' },
    { titulo: 'Abre cuando logres algo', mensaje: 'Felicidades amor 🥳' }
  ];

  const [abierta, setAbierta] = useState(null);

  return React.createElement(
    'div',
    { className: 'seccion' },

    React.createElement('h2', null, '📬 Abre cuando...'),

    cartas.map((carta, i) =>
      React.createElement(
        'div',
        { key: i, className: 'carta' },

        React.createElement(
          'button',
          { onClick: () => setAbierta(i) },
          carta.titulo
        ),

        abierta === i &&
          React.createElement(
            'p',
            null,
            carta.mensaje
          )
      )
    ),

    React.createElement(
      'button',
  { onClick: volver, className: 'btn-volver' },
  '⬅ Return'
    )
  );
}

export default Abrir;
