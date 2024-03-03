const express=require('express');
const { createRoom,BookRoom,getRooms,getBookedrooms,getCustomersbookings,getBookingCount } = require("../Contoller/Roomcontoller.js")
const router = express.Router();

router.post("/createRoom",createRoom)
router.post("/bookRoom",BookRoom)
router.get("/",getRooms)
router.get("/bookedrooms",getBookedrooms)
router.get("/customers",getCustomersbookings)
router.get("/bookingcount/:CustomerName",getBookingCount)

module.exports = router;