var categoryModel = require("../modles/categoryModel")
// var LoaiSP=[
//     {id:1,name:'Laptop'},
//     {id:2,name:'Mobile Phone'},
//     {id:3,name:'Tablet'},
//     {id:4,name:'PC'},
//   ]

  exports.getListCategories = async function getListCategories(){
      return await categoryModel.find()
  }
  exports.getCategoriesById = function getCategoriesById(id){
    let SP = categoryModel.find(sp=>sp._id==id)||{}
    return SP
}
