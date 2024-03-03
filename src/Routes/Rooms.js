const express=require('express');
const { createRoom } = require("../Contoller/Roomcontoller.js")
const router = express.Router();

router.post("/createRoom",createRoom)


module.exports = router;