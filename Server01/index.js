const http = require("http")
const server = http.createServer((request,response)=>{
    
    response.writeHead(200, {"content-type":"text/plain"})
    response.end("Server is working ")



})

const PORT = 3000
server.listen(PORT, ()=>{console.log(`Server is running on ${PORT}`);
})