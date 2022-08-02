const mongoose = require('mongoose');
const DbName = 'cfunweb'
const PORT = 27017
const Doc = require("./Doc")

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb://wsh:19930304wsh@localhost:${PORT}/${DbName}`);
  console.log(`db:${DbName} connected on port:${PORT}`)
  var newDoc = new Doc({
    title: "光强检测模块",
    cate: 2,
    item: 2,
    keyword: "光线|模拟",
    src: "https://dict.cfunworld.com/doc/2_%E4%BC%A0%E6%84%9F%E5%99%A8/02_%E5%85%89%E5%BC%BA%E6%A3%80%E6%B5%8B%E6%A8%A1%E5%9D%97/%E5%85%89%E5%BC%BA%E6%A3%80%E6%B5%8B%E6%A8%A1%E5%9D%97.html",
  })
  await newDoc.save()
  console.log("-- new Doc insert OK --")
}