const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Ruta base
app.get('/', (req, res) => {
  res.json({ mensaje: 'API del amor funcionando ❤️' });
});

// Carta
app.get('/carta', (req, res) => {
  res.json({
    texto: 'Desde que llegaste a mi vida, todo tiene sentido...'
  });
});

// Fecha para contador
app.get('/fecha', (req, res) => {
  res.json({
    inicio: '2020-08-30T00:00:00'
  });
});

// Sección "abre cuando"
app.get('/abrir', (req, res) => {
  const ahora = new Date();
  const fechaApertura = new Date('2026-02-14T00:00:00');

  res.json({
    permitido: ahora >= fechaApertura
  });
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});
