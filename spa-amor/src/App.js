import React, { useState } from 'react';

import Login from './components/Login';
import Menu from './components/Menu';
import Carta from './components/Carta';
import Contador from './components/Contador';
import Abrir from './components/Abrir';
import MiniApp from './components/MiniApp';

function App() {
  const [logueado, setLogueado] = useState(false);
  const [seccion, setSeccion] = useState(null);

  if (!logueado) {
    return React.createElement(Login, {
      onLogin: () => setLogueado(true)
    });
  }

  if (seccion === null) {
    return React.createElement(Menu, { setSeccion });
  }

  if (seccion === 'carta')
    return React.createElement(Carta, { volver: () => setSeccion(null) });

  if (seccion === 'contador')
    return React.createElement(Contador, { volver: () => setSeccion(null) });

  if (seccion === 'abrir')
    return React.createElement(Abrir, { volver: () => setSeccion(null) });

  if (seccion === 'miniapp')
    return React.createElement(MiniApp, { volver: () => setSeccion(null) });

  return null;
}

export default App;
