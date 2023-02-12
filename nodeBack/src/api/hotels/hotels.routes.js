const express =require("express");
const controller = require("./hotels.controller");

let router = express.Router();

router.get('/', controller.getHotels);
router.get('/getById/:id', controller.getHotelsById);
router.post('/newHotel', controller.createHotel);

module.exports = router