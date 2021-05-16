var productService = require("../services/productServices")

  exports.getListPro = async function getListPro(){
      return await productService.getListPro()
  }
  exports.getProductById =async function getProductById(id){
    return await productService.getProductById(id)
  }
  exports.addNew = async function addNewProduct(params){
    let{name,price,date,idLoaiSP,img} = params
    let sp={
        name: name,
        price: price,
        date:date,
        img:img,
        idLoaiSP:idLoaiSP
    }
   await productService.addNew(sp)
  }
  exports.edit = async function editProduct(id,params){
    let{name,price,date,idLoaiSP,img}= params
    let product={id,name,price,date,idLoaiSP,img}
    await productService.edit(product)

  }
  exports.remove =async function romoveProductById(id){
     await productService.remove(id)
  }
  
