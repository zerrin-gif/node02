const fs=require('fs')

//Arrow Function => ()=>{}

fs.readFile('demo.txt',(error,data)=>{
    if(error)
    {console.log(error);}
    console.log(data.toString());
    console.log("File read end...");
})
/**
 * const testSync=fs.readFileSync('demo.txt',(error,data)=>{
    if(error)
    {console.log(error);}
    console.log(data.toString());
})
 */

