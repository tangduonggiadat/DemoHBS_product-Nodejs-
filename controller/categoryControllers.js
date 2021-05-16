var CategoryService = require("../services/categorySevices")

exports.getListCategories =async function getListCategories(){
  return await CategoryService.getListCategories()
}
exports.getIDCategories =async function getIDCategories(){
  return await CategoryService.getCategoriesById()
}