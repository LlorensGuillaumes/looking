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
    const { id } = req.params;

    const hotelFound = await Hotel.findOne({ id: id });
    return res.status(200).json(hotelFound);
  } catch {
    return next(error);
  }
};

const createHotel = async (req, res, next) => {
  try {
    let hotelToCreate = new Hotel(req.body);
    let created = await hotelToCreate.save();
    return res.status(201).json(created);
  } catch (error) {
    return next(error);
  }
};

let editHotel = async(req, res, next) => {
  try {
      let { id } = req.params
      let fields = {...req.body}
      let options = { new: true }
      let edited = await Hotel.findByIdAndUpdate(id, fields, options)
      return res.status(200).json(edited)
  }
  catch(error) {
      return next(error)
  }
};

let deleteHotel = async (req, res, next) => {
  try {
      let { id } = req.params
      let deleted = await Hotel.delete({ _id: id })
      if (deleted.deletedCount) {
          return res.status(200).json("Elemento eliminado con éxito")
      } else {
          return res.status(200).json("No se encuentra el elemento para eliminar")
      }
  } catch (error) {
      return next(error)
  }
};

module.exports = {
  getHotels,
  getHotelsById,
  createHotel,
  editHotel,
  deleteHotel
};
