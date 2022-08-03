const express = require("express")
const app = new express()
const PORT = 8989
require("./core/db/connect")
const pageApi = require("./core/api/pageApi")
const staticPath = __dirname
const Path = require('path')

app.use(express.static(Path.join(staticPath, 'static')))
app.use("/api/page", pageApi)


app.get("/", (req, res) => {
  res.sendFile(`${staticPath}/h5/index.html`)
})

app.listen(PORT, ()=>{
  console.log(`server works on ${PORT}`)
})