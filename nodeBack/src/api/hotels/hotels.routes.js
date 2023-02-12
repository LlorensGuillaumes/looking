const express =require("express");
const { isAdmin, isHotelOwner } = require('../../middlewares/auth');
const controller = require("./hotels.controller");

let router = express.Router();

router.get('/', controller.getHotels);
router.get('/getById/:id', controller.getHotelsById);
router.post('/newHotel', [isAdmin], controller.createHotel);
router.put('/editHotel', [isHotelOwner], controller.editHotel);
router.delete('/deleteHotel', [isAdmin], controller.deleteHotel);

module.exports = router