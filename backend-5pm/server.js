const http = require("http")
const express = require("express")
const app = express()


app.get("/", (req, res) => {
    res.send("Hello World from home page")
})

app.get("/about", (req, res) => {
    res.send("Hello World from about page")
})

app.post("/create", (req,res)=>{
    console.log(req.body)
    res.send("Hello World from create page")

})



// const Server = http.createServer((req, res) => {
//     res.write("Hello World")
//     res.end()
// })


app.listen(8000, () => {
    console.log("Server is running on port 8000")
})
