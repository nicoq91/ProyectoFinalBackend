const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/', productosController.index);
router.post('/create', productosController.create);
router.get('/:id', productosController.new);
router.get('/:id/edit', productosController.edit);
router.put('/:id', productosController.update);
router.post('/delete/:id', productosController.deleteProductos);

module.exports = router;
