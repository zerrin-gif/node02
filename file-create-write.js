const fs = require('fs')

// fs.appendFile()    fs.writeFile()

fs.appendFile('demoNew.txt', 'Hello World!!!\n', (err)=>{
  if(err){
    console.log(err);

  }
  console.log("Append Process Finished...");
})
// fs.writeFile('demoNew.txt','Hello world!!!\n',(error)=>{
//   if (error) {
//       console.log(error);
//   }
//   console.log("Append Process Finished...");
// })