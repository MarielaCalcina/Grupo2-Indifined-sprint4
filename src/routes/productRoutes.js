const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");




router.get('/carrito-de-compras', productController.productCart);
router.get('/detalle-producto', productController.productDetail);
router.get('/crear-producto', productController.productCreate);
router.get('/modificar-producto', productController.productEdit);



module.exports = router;