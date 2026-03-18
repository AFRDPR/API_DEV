const express = require('express');
const app = express();

// Ruta de ejemplo
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola desde Render!' });
});

// Puerto dinámico para Render o fijo en local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
