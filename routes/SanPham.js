
var express = require('express');
var router = express.Router();
var auth =require('../ultinites/authen');
var productController = require("../controller/productControllers")
var categoryController = require("../controller/categoryControllers")
var upload = require('../ultinites/upload')



// router.use(auth.authenticate)
/* GET home page. */
router.get('/',auth.authenticate,async function(req, res, next) {
  let List = await productController.getListPro()
  res.render('SanPham', {ListSP: List});
});

/* GET ADD page. */
router.get('/Add-Pro',auth.authenticate,async function(req, res, next) {
  let LoaiSP = await categoryController.getListCategories()
  res.render('AddSp',{LoaiSP});
});

var middle = [auth.authenticate,upload.single('img')]
/* Post ADD page. */
router.post('/Add-Pro',middle,async function(req, res, next) {
  let { body } = req
  if (req.file) {
    let imgUrl = req.file.originalname
    body = {...body, img: imgUrl}
  }
   await productController.addNew(body)
    res.redirect('/SanPham')
  });
  var midd = [auth.authenticate,upload.single('img')]
/* GET Edit page. */
router.get('/EditSP/:id',midd,async function(req, res, next) {
   let id = req.params.id
   let product =await productController.getProductById(id)
   let LoaiSP = await categoryController.getListCategories()
    res.render('EditSP',{product :product,LoaiSP});
  });
  /* Post Edit page. */
router.post('/EditSP/:id',midd,auth.authenticate,async function(req, res, next) {
    let {id}=req.params
    let {body} = req
    if (req.file) {
      let imgUrl = req.file.originalname
      body = {...body, img: imgUrl}
    }
    await productController.edit(id, body)
    res.redirect('/SanPham')
  });
  
   /*  delete page. */
router.delete('/delete/:id',auth.authenticate, async function(req, res, next) {
    let {id} =req.params
   await productController.remove(id)
    res.send({res:true})
  });
    
module.exports = router;
