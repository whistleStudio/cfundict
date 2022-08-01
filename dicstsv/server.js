const express = require("express")
const app = new express()
const PORT = 8989
require("./core/db/connect")
const pageApi = require("./core/api/pageApi")

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/api/page", pageApi)

app.listen(PORT, ()=>{
  console.log(`server works on ${PORT}`)
})