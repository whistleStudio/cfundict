const mongoose = require('mongoose')

const docSchema = new mongoose.Schema({
  title: String,
  cate: Number,
  docid: Number,
  keyword: String,
  src: String,
  regDate: {type: Date, default: new Date()},
  editDate: {type: Date, default: new Date()}
})
const Doc = mongoose.model('docs',docSchema)

module.exports = Doc