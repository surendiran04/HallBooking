const Rooms=[];

const createRoom = (req,res)=>{
    try{
        let roomData = {
            RoomId:req.body.RoomId,
            Amenities:req.body.Amenities,
            Capacity:req.body.Capacity,
            Price:req.body.Price,
            Status:"Available",
            CustomerName:"",
            Date:"",
            StartTime:"",
            EndTime:"",
        };
        Rooms.push(roomData);
        res.status(200).send({message:"Room created successfully", Rooms})
    }
    catch(error){
        res.status(500).send({message:"Internal server error"});
    }
}


module.exports = {
    createRoom
}