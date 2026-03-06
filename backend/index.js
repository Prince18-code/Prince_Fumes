const express= require('express');
const Feedback = require("./modules/login");
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const login = require('./modules/login');
const app = express();
const port = 3000;

mongoose.connect("mongodb+srv://Prince:prince123@cluster0.brs0thn.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("MongoDB Connected");
})
.catch((err)=>{
    console.log(err);
});


app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'Assets')));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Assets', 'index.html'));
});




app.post('/login', async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;


     

});

app.post('/signup', async (req,res)=>{
    const username = req.body.username;
     const password = req.body.password;

   
     try{
         const newlogin = new login({
             username,
             password
         });

         await newlogin.save();

         console.log("Saved:", newlogin);

         res.send("Login details stored in MongoDB 🎉");

    }catch(err){
       console.log(err);
        res.send("Database error");
     }


});




app.listen(port,"0.0.0.0",()=>{
    console.log(`server is running on port ${port}`)
});