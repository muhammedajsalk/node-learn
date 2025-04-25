const http=require("http")
const fs=require("fs")


const port=3000

const server=http.createServer((req,res)=>{
    const logdd=`${Date.now()}: ${req.url} new request recieved\n`;
    fs.appendFile("log.txt",logdd,(err,data)=>{
        switch(req.url){
            case "/":
                res.end("welcome home")
                break;
            case "/about":
                res.end("welcome about")
                break;
            case "/contact":
                res.end("welcome contact")
                break;
            default:
                res.end("404")
        }
    })
     console.log(req)
})

server.listen(port,()=>{
    console.log(`server is ready ${port}`)
})