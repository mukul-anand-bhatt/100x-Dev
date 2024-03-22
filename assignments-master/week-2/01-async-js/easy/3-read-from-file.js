// const fs = require('fs');
// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('File contents:', data);
//   });
  
// fs.writeFile('example.txt',"NEW CONTENT",'utf-8',(err)=>{
//     if(err){
//         console.log("SOMETHING BAD")
//         console.log(err)
//         return;
//     }
//     console.log("FILE UPDATED")
// })
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File contents:', data);
// });




// const fs = require('fs');

// // Read file before writing
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File contents before write:', data);

//   // Write new content to the file
//   fs.writeFile('example.txt', 'NEW CONTENT03', 'utf-8', (err) => {
//     if (err) {
//       console.log('SOMETHING BAD');
//       console.log(err);
//       return;
//     }
//     console.log('FILE UPDATED');

//     // Read file after writing
//     fs.readFile('example.txt', 'utf8', (err, newData) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       console.log('File contents after write:', newData);
//     });
//   });
// });




// //Practise\\

// const fs =require('fs');

// //reading the file 

// fs.readFile('example.txt','utf8',(err,data)=>{
//   if(err){
//     console.error(err);
//     return;
//   }
//   console.log('File Contents before write',data);

//   //write new content to file
//   fs.writeFile('example.txt','NEW Content hello','utf-8',(err)=>{
//     if(err){
//       console.log('something bad');
//       console.log(err);
//       return;
//     }
//     console.log('file update');

//     //read file after writing
//     fs.readFile('example.txt','utf-8',(err,newData)=>{
//       if(err){
//         console.log('error occured while reading');
//         return;
//       }
//       console.log('file contents after updation',newData);


//     });



//   });
// })



//going with an heavy tast in between

const fs = require('fs');

function readfile(filename){
  fs.readFile(filename,'utf-8',(err,data)=>{
    if(err){
      console.log('Error occured while reading',err);
      return;
    }
    console.log("file ka data ",data);
  });
}
//this shows an async behavour of the fs file system

function heavytask(){
  setTimeout(() => {
    for(let i=0;i<10000;i++){

    }
    console.log('heavy task hua complete');
  },0);

}


const filename = 'example.txt';

readfile(filename);
heavytask();