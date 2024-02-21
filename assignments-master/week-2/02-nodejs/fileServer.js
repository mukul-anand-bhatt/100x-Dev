/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 **/
    
//     const express = require('express');
//     const fs = require('fs');
//     const path = require('path');
//     const app = express();
    
//     app.get('/files',function(req,res){//get is request method
//       let filearray=[]
//     const files=fs.readdirSync('./files/');  //files -> {a.txt, b.txt}
//     files.forEach((file)=>{
//       let filedetails = fs.lstatSync(path.resolve("./files/", file));//lstatsync used to know about the file
//       if (filedetails.isDirectory()) {
    
    
//         filearray.push(file + " (Directory)");
//       } else {
//         filearray.push(file);
//       }
//         console.log("DONE")
//         console.log(filearray)
       
        
//     })
//      res.json( filearray );
//     })
    
//     app.get('/files',function(req,res){
//       const filepath = path.join(__dirname, './files/', req.params.filename);

//     fs.readFile(filepath, 'utf8', (err, data) => {
//     if (err) {
//         return res.status(404).send('File not found');
//     }
//     res.send(data);
//     });
//   })
// // Start the Express server and listen on port 3000
// app.listen(3000, () => {
//   console.log('Server is listening on port 3000');
// });
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Endpoint 1: GET /files
app.get('/files', (req, res) => {
  const filesDirectory = './files/';

  fs.readdir(filesDirectory, (err, files) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(files);
    }
  });
});

// Endpoint 2: GET /file/:filename
app.get('/file/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join('./files/', filename);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.status(404).send('File not found');
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(200).send(data);
    }
  });
});

// Handling undefined routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app; // Export the app for testing purposes
