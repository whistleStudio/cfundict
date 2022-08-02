const express = require("express")
const rt = express.Router()
const Doc = require("../db/Doc")
// const {cateInfo} = require("./cateInfo.json")
const cateInfo = require("./cateInfoRefresh")

rt.get("/home", (req, res) => {
  console.log("--home--")
  try {
    ;(async ()=> {
      let q = await Doc.findOne({sub:0, cate:0, item:0}, "src")
      if (q) {
        let {src} = q
        res.json({err:0, src})
      } else res.json({err:1, msg:"文档查询失败"})
    })()
  } catch(e){console.log(e);res.json({err:5})}
  
})

rt.get("/getCate", (req, res) => {
  res.json({err:0, cateInfo})
})

rt.get("/getPage", (req, res) => {
  let {sub, cate, item} = req.query
  switch (sub) {
    default: 
      try {
        ;(async () => {
          let q = await Doc.findOne({sub, cate, item}, "src")
          if (q) {
            let {src} = q
            res.json({err:0, src})
          } else res.json({err:1, msg:"文档查询失败"}) 
        })()
      } catch(e){console.log(e);res.json({err:5})}
  }
})



module.exports = rt