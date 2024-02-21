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

const fs = require('fs');

// Read file before writing
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File contents before write:', data);

  // Write new content to the file
  fs.writeFile('example.txt', 'NEW CONTENT03', 'utf-8', (err) => {
    if (err) {
      console.log('SOMETHING BAD');
      console.log(err);
      return;
    }
    console.log('FILE UPDATED');

    // Read file after writing
    fs.readFile('example.txt', 'utf8', (err, newData) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('File contents after write:', newData);
    });
  });
});