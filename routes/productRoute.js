const express=require('express')
const router=express.Router()
const { createProduct, getProducts,getProduct,deleteProduct, updateProduct} = require('../controllers/productController')
const protect=require('../middlewares/authMiddleWare')

router.post('/',protect,createProduct)
router.patch('/:id',protect,updateProduct)
router.get('/',protect,getProducts)
router.get('/:id',protect,getProduct)
router.delete('/:id',protect,deleteProduct)

module.exports=router;  