// Importación del framework de express
const express = require('express');

// Agraegar configuración al process.env
require("../config/index.config");

// Instanciando la aplicación
const app = express();

// Aplicar middleware que permite leer los json del body
app.use(express.json());

// Integrando el router con la app
const router = require("./routers/index.router");
app.use(router);

// Puerto donde se levanta el servidor web
// Puerto donde está escuchando la API
const PORT = 3000;

// Levantar la API que estará escuchando en el puerto 3000
// 1. Primer parámetro: Puerto
// 2. Segundo parámetro: Callback
app.listen(PORT, () => {
  console.log(`API escuchando en: http://localhost:${PORT}`);
});