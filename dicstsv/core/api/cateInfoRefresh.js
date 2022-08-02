const Doc = require("../db/Doc")

let cateInfo = [
  {  
    "name": "文档", 
    "cate": [
      {
        "name": "控制器",
        "item": [
        
        ]
      },
      {
        "name": "执行器",
        "item": [
        
        ]
      },
      {
        "name": "传感器",
        "item": [
        
        ]
      }
    ]
  }
]

try {
  ;(async () => {
    let q = await Doc.find()
    q.forEach(e=> {
      let {sub, cate, item} = e
      if (sub<cateInfo.length && cate<cateInfo[sub]?.cate?.length) {
        cateInfo[sub].cate[cate].item.push(e.title)
      } else console.log(`***database err -> ***${e.title}`)
    })
    console.log("√ cateInfo refresh OK √")
  })()
} catch(e){console.log(e)}

module.exports = cateInfo