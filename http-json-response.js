const http = require("http");

const port = 3005;
const server = http.createServer((req, res)=>{
    const superHero = {
        firstName: "Doctor",
        lastName: "Strange"
    }
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(superHero));
});

server.listen(port,()=>{
    console.log("Server Listening")
});