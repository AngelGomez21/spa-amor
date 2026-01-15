import React, { useEffect, useState } from 'react';

function Contador({ volver }) {
  const inicio = new Date('2020-08-30T00:00:00'); // ⬅ FECHA DEL NOVIAZGO

  const calcularTiempo = () => {
    const ahora = new Date();
    let diff = Math.floor((ahora - inicio) / 1000);

    const segundos = diff % 60;
    diff = Math.floor(diff / 60);

    const minutos = diff % 60;
    diff = Math.floor(diff / 60);

    const horas = diff % 24;
    diff = Math.floor(diff / 24);

    const diasTotales = diff;

    const semanas = Math.floor(diasTotales / 7);
    const dias = diasTotales % 7;

    const meses = Math.floor(diasTotales / 30);
    const anios = Math.floor(diasTotales / 365);

    return {
      anios,
      meses,
      semanas,
      dias,
      horas,
      minutos,
      segundos
    };
  };

  const [tiempo, setTiempo] = useState(calcularTiempo());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(calcularTiempo());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return React.createElement(
    'div',
    { className: 'seccion contador' },

    React.createElement('h2', null, '⏳ Nuestro tiempo juntos'),

    React.createElement(
      'p',
      null,
      `Años: ${tiempo.anios}`
    ),
    React.createElement(
      'p',
      null,
      `Meses: ${tiempo.meses}`
    ),
    React.createElement(
      'p',
      null,
      `Semanas: ${tiempo.semanas}`
    ),
    React.createElement(
      'p',
      null,
      `Días: ${tiempo.dias}`
    ),
    React.createElement(
      'p',
      null,
      `Horas: ${tiempo.horas}`
    ),
    React.createElement(
      'p',
      null,
      `Minutos: ${tiempo.minutos}`
    ),
    React.createElement(
      'p',
      null,
      `Segundos: ${tiempo.segundos}`
    ),

    React.createElement(
      'button',
      { onClick: volver },
      '⬅ Return'
    )
  );
}

export default Contador;
