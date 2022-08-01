const express = require("express")
const rt = express.Router()
const Doc = require("../db/Doc")

rt.get("/home", (req, res) => {
  console.log(req.query)
  try {
    ;(async ()=> {
      let q = await Doc.findOne({cate:0, docid:0}, "src")
      if (q) {
        let {src} = q
        res.json({err:0, src})
      } else res.json({err:1, msg:"文档查询失败"})
    })()
  } catch(e){console.log(e);res.json({err:5})}
  
})

module.exports = rt