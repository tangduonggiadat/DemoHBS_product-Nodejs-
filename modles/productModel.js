const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String },
    price: { type: Number },
    date: { type: Date },
    idLoaiSP: { type: Schema.Types.ObjectId,
         ref: 'Category' },
    img: { type: String }
})

module.exports = mongoose.model('Product', 
productSchema)