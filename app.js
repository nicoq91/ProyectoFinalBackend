const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const path = require('path');

// Configuración de la base de datos
async function connectDatabase() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/tu_kiosco', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conexión exitosa con mongodb');
  } catch (error) {
    console.error('Error de conexión a la base de datos:', error);
  }
}
connectDatabase();

// Middlewares
// app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('/public'));

// Rutas

const homeController = require('./controllers/homeController');
const productosRoutes = require('./routes/productosRoutes');
app.use('/productos/', productosRoutes);

// Ruta de inicio
app.get('/', homeController.index);

// Inicialización del servidor
app.listen(port, () => {
  console.log(`Estamos corriendo en el puerto ${port}`);
});
