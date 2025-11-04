const fs = require("fs")

fs.readFile("./text2.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("there is an error")
        return
    }
    console.log(data)
})

const filedata = fs.readFileSync("./text.txt", "utf-8")
console.log(filedata)

fs.writeFile("./text3.txt", "this is from write file method", (err) => {
    if (err) {
        console.log("there is an error")
        return
    }
    console.log("file written successfully")
})

fs.appendFile("./newfolder/text3.txt", "\n this is from appended file method", (err) => {
    if (err) {
        console.log("there is an error")
        return
    }
    console.log("file appended successfully")
})

fs.rename("./text3.txt", "renamedfile.txt", (err) => {
    if (err) {
        console.log("there is an error")
        return
    } console.log("file renamed successfully")
})

fs.copyFile("./renamedfile.txt", "copiedfile.txt", (err) => {
    if (err) {
        console.log("there is an error")
        return
    }
    console.log("file copied successfully")
})


fs.unlink("./text2.txt", (err) => {
    if(err){
        console.log("there is an error while deleting")
        return
    }
    console.log("file deleting successfully")
})

fs.mkdir("./newfolder", (err) => {
    if(err){
        console.log("there is an error while creating folder")
        return
    }
})
// fs.rmdir("./newfolder", (err) => {
//     if(err){
//         console.log("there is an error while deleting folder")
//         return
//     }
//     console.log("folder deleted successfully")
// })
