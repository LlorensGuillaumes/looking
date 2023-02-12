const Hotel = require("./hotels.model");

const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    return res.status(200).json(hotels);
  } catch {
    return next(error);
  }
};

const getHotelsById = async (req, res, next) => {
    try {
        const { id } = req.params

      const hotelFound = await Hotel.findOne({id:id})
      return res.status(200).json(hotelFound);
    } catch {
      return next(error);
    }
  };

const createHotel = async (req, res, next) =>{
try{
  let hotelToCreate = new Hotel(req.body)
  let created = await hotelToCreate.save()
  return res.status(201).json(created)
}catch (error){
  return next(error)

}
}

  module.exports = {
    getHotels,
    getHotelsById,
    createHotel,
  }