const express = require('express');
const app=express();
const PORT=8000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send(rooms)
})
const rooms=[];
app.post('/addrooms',(req,res)=>{
    const room=req.body.room;
    rooms.push(room)
    res.send(rooms)
})
app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
})