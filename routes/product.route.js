const express = require('express')
const router = express.Router()
const {postProduct, getProducts, getProduct, updatedProduct, deleteProduct } = require('../controller/product.controller')

router.post('/', postProduct)
router.get('/', getProducts)
router.get('/:id', getProduct)
router.put('/:id', updatedProduct)
router.delete('/:id', deleteProduct)

module.exports = router