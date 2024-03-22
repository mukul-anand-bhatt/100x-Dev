const fs = require ('fs');

function asnctasksforFile(){
    fs.readFile(filename,'utf-8',(err,data)=>{
        if(err){
            console.log('bhai error a gaya',err);
            return;
        }
        console.log('bhai file read karli ',data);
    })
    const newstring = "haa bhai kya haal";
    fs.writeFile(filename,newstring,'utf-8',(err,data)=>{
        if(err){
            console.log('bhai error agai',err);
        }
        console.log('bhai change kar di file');
    })

    fs.readFile(filename,'utf-8',(err,data)=>{
        if(err){
            console.log('bhai error a gaya',err);
            return;
        }
        console.log('bhai file read karli 2.0 ',data);
    })
}
const filename='example.txt';
asnctasksforFile(filename);