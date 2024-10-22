import express from 'express';
import connectDB from './config/dbconfig.js';

const PORT = 3000; //PORT NUmber
const app = express(); // create express app server instance

// app.get('/',(req,res)=>{
//     return res.send('home');
// });
// app.get('/ding',(req,res)=>{
//     return res.json({message: 'DONG'});
// });
// app.get('/Hello',(req,res)=>{
//     return res.json({ message : 'a very hello'});
// });

app.listen(PORT,()=>{
    console.log("Server is running on port",PORT);
    connectDB();
});



