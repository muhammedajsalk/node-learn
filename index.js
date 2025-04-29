const fs=require("fs")

const fileContent=fs.readFileSync("log.txt","utf-8")

const fileContentss=fs.readFile("log.txt","utf-8",(err,data)=>{
    if(err){
        console.log("error found")
    }else{
        console.log(data+"async");        
    }
})

console.log(fileContent+"sync");


