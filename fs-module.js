const fs = require("fs");


//Read file
console.log("First")
const fileContents = fs.readFileSync("./file.txt", "utf-8");   // read file synchronously
console.log(fileContents)

console.log("Second")

// read file asynchronously
fs.readFile("./file.txt", "utf-8", (error, data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})

console.log("Third")


//Write File

fs.writeFileSync("./greet.txt", "Hello Avijit");

fs.writeFile("./greet.txt", " HEY Prosen", {flag: "a"}, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("File Written")
    }
})