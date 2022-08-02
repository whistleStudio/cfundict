const mongoose = require('mongoose')

const docSchema = new mongoose.Schema({
  title: String,
  sub: {type: Number, default: 0},
  cate: Number,
  item: Number,
  keyword: String,
  src: String,
  regDate: {type: Date, default: new Date()},
  editDate: {type: Date, default: new Date()}
})
const Doc = mongoose.model('docs',docSchema)

module.exports = Doc