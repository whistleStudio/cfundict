const mongoose = require('mongoose');
const DbName = 'cfunweb'
const PORT = 27017
const Doc = require("./Doc")

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb://wsh:19930304wsh@localhost:${PORT}/${DbName}`);
  console.log(`db:${DbName} connected on port:${PORT}`)
  var newDoc = new Doc({
    title: "智能主控",
    cate: 0,
    docid: 0,
    keyword: "智能|主控",
    src: "https://cfunweb.oss-cn-hangzhou.aliyuncs.com/doc/0_%E6%8E%A7%E5%88%B6%E5%99%A8/00_CF-Board-A%E4%B8%BB%E6%8E%A7%E6%9D%BF/CF-Board-A%E4%B8%BB%E6%8E%A7%E6%9D%BF.html",
  })
  await newDoc.save()
  console.log("new Doc insert OK")
}