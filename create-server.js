const http = require("http");

const port = 3002;
const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text-plain"});
    res.end("Server Working");
});

server.listen(port,()=>{
    console.log("Server Listening")
});