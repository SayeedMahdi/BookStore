const fs = require('fs')
 
const fileStream = fs.createWriteStream('man.txt');
 
fileStream.write('This is the first line!'); 
fileStream.write('This is the second line!');
fileStream.end();
let call= (err, data)=>{
    console.log(data);
}
fs.readFile("./man.txt","utf-8",call);