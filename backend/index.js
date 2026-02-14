const express= require('express');
const Feedback = require("./modules/login");
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/guestbookDB");


app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'Frontend')));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Frontend', 'index.html'));
});




app.post('/login', (req,res)=>{

    // const username = req.body.username;
    // const password = req.body.password;

   
    // try{
    //     const newFeedback = new Feedback({
    //         username,
    //         email,
    //         message
    //     });

    //     await newFeedback.save();

    //     console.log("Saved:", newFeedback);

    //     res.send("Feedback stored in MongoDB 🎉");

    // }catch(err){
    //     console.log(err);
    //     res.send("Database error");
    // }

});




app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});