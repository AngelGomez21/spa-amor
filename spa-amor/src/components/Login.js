import React, { useState } from 'react';

function Login({ onLogin }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [animando, setAnimando] = useState(false);

  function validar() {
    if (user === 'MARINSY' && pass === '30082020') {
      setAnimando(true);

      setTimeout(() => {
        onLogin();
      }, 2000);
    } else {
      alert('Datos incorrectos 💔');
    }
  }

  // 🔒 Animación
  if (animando) {
    return React.createElement(
      'div',
      { className: 'login animacion-login' },

      React.createElement(
        'div',
        { className: 'candado-fractura' },

        React.createElement('div', { className: 'pieza abajo' }, '🔒'),
        React.createElement('div', { className: 'pieza centro' }, '🔒'),
        React.createElement('div', { className: 'pieza arriba' }, '🔒'),

        React.createElement(
          'div',
          { className: 'corazones-dentro' },
          React.createElement('span', { className: 'corazon c1' }, '💖'),
          React.createElement('span', { className: 'corazon c2' }, '💗'),
          React.createElement('span', { className: 'corazon c3' }, '💕'),
          React.createElement('span', { className: 'corazon c4' }, '💘'),
          React.createElement('span', { className: 'corazon c5' }, '💝')
        )
      )
    );
  }

  // 🧾 Login normal
  return React.createElement(
    'div',
    { className: 'seccion login login-box' },

    React.createElement('h2', { className: 'login-titulo' }, '🔐 Acceso'),

    React.createElement('input', {
      className: 'login-input',
      placeholder: 'Usuario',
      value: user,
      onChange: e => setUser(e.target.value)
    }),

    React.createElement('input', {
      className: 'login-input',
      placeholder: 'Fecha especial',
      value: pass,
      onChange: e => setPass(e.target.value)
    }),

    React.createElement(
      'button',
      { className: 'login-btn', onClick: validar },
      'Entrar 💖'
    )
  );
}

export default Login;
