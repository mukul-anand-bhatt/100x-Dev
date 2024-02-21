import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://admin:vFN1jq5PjxdqkK4m@cluster0.jjlwj8j.mongodb.net/");
const User = mongoose.model('Users', { name: String, email:String , password:String});

app.post("/singup", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const existinguser = await User.findOne({email:username});

    if(existinguser){
        return res.status(400).send("User already Exist");
    }

    const user = new User({
        name: name,
        email:username,
        password:password
    });

    user.save();
    res.json({
        "msg":"User created successfully"
    });
});
