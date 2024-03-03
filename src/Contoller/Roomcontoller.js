const Rooms=[];
const CustomerBookings =[];
const BookedRooms =[];

const createRoom = (req,res)=>{
    try{
        let roomData = {
            RoomId:req.body.RoomId,
            Amenities:req.body.Amenities,
            NoOfSeats:req.body.NoOfSeats,
            Price:req.body.Price,
            status:"Available",
            CustomerName:"",
            Date:"",
            StartTime:"",
            EndTime:"",
        };
        Rooms.push(roomData);
        res.status(200).send({message:"Room created successfully"})
    }
    catch(error){
        res.status(500).send({message:"Internal server error"});
    }
}

const getRooms = (req, res) => {
    try {
      if (Rooms.length) {
        res.status(200).send({ message: "Rooms Data Fetched", Rooms });
      }
      else res.status().send({ message: "NO Rooms are Created" });
    } 
    catch (error) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  };
  

const BookRoom = (req, res) => {
    try {
      const roomIdToBook = parseInt(req.body.RoomId);
      const roomToBook = Rooms.find((room) => room.RoomId == roomIdToBook);
    
  
      if (roomToBook) {
        if (roomToBook.status === "Available") {
          roomToBook.status = "Occupied";
          roomToBook.CustomerName = req.body.CustomerName;
          roomToBook.Date = req.body.Date;
          roomToBook.StartTime = req.body.StartTime;
          roomToBook.EndTime = req.body.EndTime;

          CustomerBookings.push({
            CustomerName: req.body.CustomerName,
            RoomId: req.body.RoomId,
            Date: req.body.Date,
            StartTime: req.body.StartTime,
            EndTime: req.body.EndTime,
          });
  
  
          res.status(200).send({ message: "Room Booked Successfully!"});
        } else {
          res.status(400).send({ message: `Room ${roomIdToBook} is already booked` });
        }
      } 
      else {
        res.status(404).send({ message: `Room ${roomIdToBook} not found` });
      }
    } catch (error) {
      res.status(500).send({ message: "Internal server error", error: error.message });
    }
  };

  
  const getBookedrooms = (req, res) => {
    try {
      Rooms.map((e) => {
        if (e.status == "Occupied") {
          BookedRooms.push({
            RoomId: e.RoomId,
            status: e.status,
            CustomerName: e.CustomerName,
            Date: e.Date,
            StartTime: e.StartTime,
            EndTime: e.EndTime,
          });
        }
      });
      res.status(200).send({ message: "Booked Rooms Data Fetched", BookedRooms });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  };
  
  const getCustomersbookings = (req, res) => {
    try {
      res
        .status(200)
        .send({ message: "Booked Customers Data Fetched", CustomerBookings });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  };
  let CustomerBooking = [];
  const getBookingCount = (req, res) => {
    try {
      const Customername  = req.params.Customername;
      console.log(Customername)
      if (!Customername) {
        return res
          .status(400)
          .send({ message: "CustomerName parameter is missing" });
      }
      const bookingCount = CustomerBookings.reduce((count) => {
          CustomerBooking = CustomerBookings.filter((booking) => {
            return booking.CustomerName == Customername
        }
        );
            return CustomerBooking.length; 
      }, 0);
  
      res.status(200).send({
        message: `Booking count for ${Customername}: ${bookingCount}`,
        bookingCount: bookingCount,
        CustomerBookings:CustomerBooking
      });
    } 
    catch (error) {
      res.status(500).send({ message: "Internal Server Error", error: error.message });
    }
  };
  

module.exports = {
    createRoom,BookRoom,getRooms,getBookedrooms,getCustomersbookings,getBookingCount
}
