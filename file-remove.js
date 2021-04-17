const fs = require('fs')
const fileName = 'demoNew.txt'
fs.unlink('demoNew.txt',(err)=>{
    if (err) {
        //console.log(err)
        throw err;
    }
    console.log("File was deleted.");
})