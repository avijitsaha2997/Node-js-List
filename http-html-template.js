const http = require("http");
const fs = require("fs")

const port = 3007;
const server = http.createServer((req, res)=>{
    const name = "YAY";
    res.writeHead(200, {"Content-Type": "text/html"});
   
    let html = fs.readFileSync("./http-html-response.html", "utf-8")
    html = html.replace("{{name}}", name)
    res.end(html);
});

server.listen(port,()=>{
    console.log("Server Listening")
});