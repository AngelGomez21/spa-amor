import React, { useEffect, useState } from 'react';


function Carta({ volver }) {
  const textoCompleto =
    'Amor mío,\n\n' +
    'No sé por dónde empezar sin que el corazón me tiemble un poco. A veces siento que las palabras se quedan cortas para explicar todo lo que significas para mí, pero aun así lo intento, porque tú mereces cada intento, cada letra y cada latido.\n\n' +
    'Desde que llegaste a mi vida, todo cambió de una manera tan silenciosa pero tan profunda. Me enseñaste que el amor no siempre grita, que a veces se siente en la calma, en la confianza, en saber que hay alguien que te elige incluso en los días difíciles.\n\n' +
    'Contigo aprendí a amar con paciencia, a cuidar, a preocuparme de verdad. Aprendí que amar no es solo estar cuando todo está bien, sino quedarse cuando las cosas pesan, cuando hay cansancio, cuando hay dudas. Y aun así, aquí estoy, eligiéndote una y otra vez.\n\n' +
    'Gracias por existir, por ser tú, por no rendirte, por seguir caminando conmigo incluso cuando el camino no es perfecto. Gracias por tu risa, por tu cariño, por tus silencios y por tu forma tan única de amar.\n\n' +
    'Si alguna vez dudas, si alguna vez el mundo pesa más de la cuenta, vuelve a estas palabras. Aquí estoy yo, amándote con todo lo que soy, hoy, mañana y siempre.\n\n' +
    'Te amo más de lo que puedo explicar.\n' +
    'Y eso no va a cambiar. Nunca. ❤️';

  const [textoMostrado, setTextoMostrado] = useState('');
  const [indice, setIndice] = useState(0);

  const [abrirSobre, setAbrirSobre] = useState(false);
  const [salirCarta, setSalirCarta] = useState(false);
  const [desdoblar, setDesdoblar] = useState(false);
  const [escribir, setEscribir] = useState(false);

  useEffect(() => {
    setTimeout(() => setAbrirSobre(true), 800);
    setTimeout(() => setSalirCarta(true), 1500);
    setTimeout(() => setDesdoblar(true), 2600);
    setTimeout(() => setEscribir(true), 3600);
  }, []);

  useEffect(() => {
    if (escribir && indice < textoCompleto.length) {
      const t = setTimeout(() => {
        setTextoMostrado(textoCompleto.slice(0, indice + 1));
        setIndice(indice + 1);
      }, 35);
      return () => clearTimeout(t);
    }
  }, [indice, escribir]);

  return (
    <div className="carta-escena">
      <button className="btn-volver" onClick={volver}>⬅ Volver</button>

      <div className={`sobre ${abrirSobre ? 'abierto' : ''}`}>
        <div className="sobre-fondo"></div>
        <div className="sobre-lado izquierdo"></div>
        <div className="sobre-lado derecho"></div>
        <div className="sobre-tapa"></div>
      </div>

      <div
        className={`hoja doblada 
        ${salirCarta ? 'salir' : ''} 
        ${desdoblar ? 'desdoblada' : ''}`}
      >
        <p style={{ whiteSpace: 'pre-line' }}>{textoMostrado}</p>
      </div>

    </div>
  );
}

export default Carta;
