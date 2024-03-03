const express = require('express');
const router = require('./Routes/Rooms.js')  
const app=express();
const PORT=8000;

app.use(express.json());



app.use(router);

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
})