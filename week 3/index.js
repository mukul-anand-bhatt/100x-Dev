import express from "express";
const app = express();

app.get("/health-checkup", (req, res) => {
  const kidneyid = req.query.kidneyid;
  const username = req.headers.username;
  const password = req.headers.password;

  if(username != "Mukul" && password != "pass"){
    res.status(403).json({
      msg: "user does not exist"
    });
    return;
  }
  if(kidneyid != 1 && kidneyid != 2){
    res.status(411).json({
      msg: "wrong inputs"
    });
    return;
  }
  res.send("Your heart is healthy");
});

// import express, { response } from "express"
// import zod from "zod"
// const app = express();

// const schema=zod.array(zod.number());

// app.use(express.json());
 
// const schema = zod.object({
//   email: zod.string(),
//   password: z.string(),
//   country: z.literal("IN").or(z.literal("US")),
//   kidneys: z.array(z.number())
// })

// app.post("/health-checkup",function(req,res){
//   const kidneys = req.body.kidneys;
//   const reponse = schema.safeParse(kidneys)
//   if(!response.success){
//     res,status(411).json({
//       msg:"input is Invalid"
//     })
//   }else{
//   res.send({
//     reponse
//   })
// }
// });
// app.listen(3000);

// const express = require("express");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const jwtPassword = "123456";

// mongoose.connect(
//   "your_mongo_url",
// );

// const User = mongoose.model("User", {
//   name: String,
//   username: String,
//   pasword: String,
// });

// const app = express();
// app.use(express.json());

// function userExists(username, password) {
//   // should check in the database
// }

// app.post("/signin", async function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, "shhhhh");
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     // return a list of users other than this username from the database
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

// app.listen(3000);