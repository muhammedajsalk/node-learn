const fs= require("fs")

fs.writeFileSync("greet.txt","hello world")


fs.writeFile("log.txt","hello bous djs",(error)=>{
    if(error){
        console.log("error found")
    }else{
        console.log("succefullly writed")
    }
})