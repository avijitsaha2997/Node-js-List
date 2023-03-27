const fs = require("fs");

//streams use it's default 64 bytes chunk size

const readableStream = fs.createReadStream("./file.txt",{
    encoding: "utf-8",
    highWaterMark: 3, // here we specified the chunk size to 3
});

const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk)=>{
    console.log(chunk);
    writeableStream.write(chunk)
})