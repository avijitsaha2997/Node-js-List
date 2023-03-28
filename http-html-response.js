const http = require("http");
const fs = require("fs")

const port = 3007;
const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/html"});

    const readableStream = fs.createReadStream(__dirname + "/http-html-response.html");

    readableStream.pipe(res)

   
    // const html = fs.readFileSync("./http-html-response.html", "utf-8")
    // res.end(html);
});

server.listen(port,()=>{
    console.log("Server Listening")
});