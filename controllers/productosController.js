
const Productos = require('../database/models/productos');
//export index se utiliza para mostrar todos los productos
exports.index = async (req, res) => {
    try {
        // console.log("llegue", req.body)
        const productos = await Productos.find();
        res.json(productos);
    } catch (error) {
        // Manejar el error de manera adecuada
        res.send('Error al obtener los productos');
    }
};


exports.create = async (req, res) => {
    console.log('llegué', req.body);
    try {
        const producto = await Productos.create(req.body);
        res.status(200).json({
            success: true,
            message: "Producto creado",
            producto: producto
        });
    } catch (error) {
        console.log('error en la línea 27', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


exports.new = async (req, res) => {
    try {
        const productos = await Productos.find();
        if (productos.length > 0) {
            res.render('productos/create', { productos });
        } else {
            // Manejar el caso en el que no se encuentre el producto
            res.send('No se encontraron productos');
        }
    } catch (error) {
        // Manejar el error de manera adecuada
        res.send('Error al mostrar los productos');
    }
};

exports.edit = async (req, res) => {
    try {
        // console.log('edit esta andando', req.params);
        const producto = await Productos.findById(req.params.id);
        res.render('productos/update', { producto });
    } catch (error) {
        // Manejar el error de manera adecuada
        res.send('Error al editar el producto');
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Productos.findById(id);
        if (!producto) {
            return res.send('Producto no encontrado');
        }
        producto.producto_nombre = req.body.producto_nombre;
        await producto.save();
        res.redirect(`/productos/update/${producto.producto_nombre}`);
    } catch (error) {
        // Manejar el error de manera adecuada
        res.send('Error al actualizar el producto');
    }
};
exports.deleteProductos = async (req, res) => {
    console.log('llegue a la ruta')
    try {
        const { id } = req.params;
        const deletedProduct = await Productos.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: 'Producto no encontrado'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Producto eliminado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al eliminar el producto',
            error: error.message
        });
    }
};
