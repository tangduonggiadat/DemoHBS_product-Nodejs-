var categoryService = require("../services/categorySevices")
var productmodel = require("../modles/productModel")
// var ListSP=[
//     {id:1,name:'Asus',price:500,date:'2021-03-15',idLoaiSP:1,img:'http://localhost:2009/images/1.jpg'},
//     {id:2,name:'Acer',price:300,date:'2021-03-19',idLoaiSP:1,img:'http://localhost:2009/images/3.jpg'},
//     {id:3,name:'Dell',price:4400,date:'2021-03-19',idLoaiSP:1,img:'http://localhost:2009/images/2.jpg'},
//     {id:4,name:'Lenovo',price:7900,date:'2021-03-10',idLoaiSP:1,img:'http://localhost:2009/images/4.jpg'},
//     {id:5,name:'Macbook',price:100000,date:'2021-03-30',idLoaiSP:3,img:'http://localhost:2009/images/2.jpg'},
//   ]
  exports.getListPro =async function getListPro(){
    let products = await productmodel.find().populate('idLoaiSP')
    // console.log('>>>>>>>',product);
    // let List = products.map(sp=> {
    //     return {
    //       id: sp._id,
    //       name: sp.name,
    //       price: sp.price,
    //       date: convertDate.execute(sp.date),
    //       loaiSP : sp.idLoaiSP,
    //       img: sp.img          
    //     }
    //   }) 
      return products;
  }
  exports.getProductById =async function getProductById(id){
      let product = await productmodel.findById(id)
      return product
  }
  exports.addNew = async function addNewProduct(product){
    let pro = new productmodel(product)
    await pro.save()
  }
  exports.edit =async function editProduct(product){
    let pro = await productmodel.findById(product.id)
    if(pro){
      pro.name=product.name
      pro.price=product.price
      pro.date=product.date
      pro.idLoaiSP=product.idLoaiSP
     
      
      
      if(product.img){
        pro.img = product.img
    }
    await pro.save()
    }
      // ListSP.forEach(sp =>{
      //     if(sp.id== product.id){
      //         sp.name=product.name
      //         sp.price=product.price
      //         sp.date=product.date
      //         sp.idLoaiSP=product.idLoaiSP
      //         sp.img=product.img

      //         if(product.img){
      //             sp.img = product.img
      //         }
      //     }

      // })
    }
  exports.remove =async function romoveProductById(id){
      await productmodel.remove({_id : id})
  }
 
