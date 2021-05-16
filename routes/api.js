var express = require('express');
var router = express.Router();
var productController = require("../controller/productControllers")

/* GET home list. */
router.get('/SanPham',async function(req, res, next) {
  let ListSP = await productController.getListPro()
  res.json(ListSP);
});

/* GET sp detail. */
router.get('/SanPham/:id',async function(req, res, next) {
  let {id} =req.params
  let prod = await productController.getProductById(id)
  res.json(prod)
});

module.exports = router;