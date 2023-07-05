const mongoose = require('mongoose');

const tu_kioscoSchema = new mongoose.Schema({
    categoria: String,
    marca: String,
    tamaño: String,
    precio_producto: Number,
    stock: Number,
    proveedor: String,
    producto_nombre: String,
});



module.exports = mongoose.model('productos', tu_kioscoSchema);


