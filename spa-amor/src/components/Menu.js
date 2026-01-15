import React from 'react';

function Menu({ setSeccion }) {
  return React.createElement(
    'div',
    { className: 'seccion menu' },

    React.createElement('h2', { className: 'menu-titulo' }, '💘 Nuestro Espacio'),

    React.createElement(
      'div',
      { className: 'menu-botones' },

      React.createElement(
        'button',
        { className: 'menu-btn', onClick: () => setSeccion('carta') },
        '💌 Carta'
      ),

      React.createElement(
        'button',
        { className: 'menu-btn', onClick: () => setSeccion('contador') },
        '⏳ Contador'
      ),

      React.createElement(
        'button',
        { className: 'menu-btn', onClick: () => setSeccion('abrir') },
        '📬 Abre cuando'
      ),

      React.createElement(
        'button',
        { className: 'menu-btn', onClick: () => setSeccion('miniapp') },
        '💖 Mini App'
      )
    )
  );
}

export default Menu;
