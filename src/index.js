const express = require('express');
const router = require('./Routes/Rooms.js')  
const app=express();
require("dotenv").config();

const PORT=process.env.PORT

app.use(express.json());


app.use(router);

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
})