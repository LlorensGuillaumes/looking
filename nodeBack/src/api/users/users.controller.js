const User = require('./users.model');
const bcrypt = require('bcrypt');
const { generateToken } = require ('../../utils/jwt/jwt');

const register = async(req, res, next) => {
    try {

        const newUser = new User(req.body);
        newUser.rol !== "user" ? (newUser.rol = 'user') : null;

        const userDB = await newUser.save();
        return res.status(201).json(userDB);

        
    } catch (error) {
        return res.statos(400).json("user create ERROR");
    }
};

const getAllUsers = async (req, res, next) => {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json("fallo al obtener usuarios");
    }
  };
  
  const getUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const userDB = await User.findById(id);
      return res.status(200).json(userDB);
    } catch (error) {
      return res.status(400).json("fallo al obtener usuario");
    }
  };
  
  const getUserByEmail = async (req, res, next) => {
    try {
      const { email } = req.params;
      console.log(email);
      const userDB = await User.findOne({ email: email });
      return res.status(200).json(userDB);
    } catch (error) {
      return res.status(400).json("fallo al obtener usuario");
    }
  };
  
  const deleteUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const userDB = await User.findByIdAndRemove(id);
      return res.status(200).json(userDB);
    } catch (error) {
      return res.status(400).json("fallo al eliminar usuario");
    }
  };
  
  const login = async (req, res, next) => {
    try {
      const userDB = await User.findOne({ email: req.body.email });
      if (!userDB) {
        return res.status(400).json("ese usuario no existe");
      }
      if (bcrypt.compareSync(req.body.password, userDB.password)) {
  
          const token = generateToken(userDB._id, userDB.email);
          return res.status(200).json({token, userDB});
  
      } else {
          return res.status(400).json("esta contraseña está mal");
      }
    } catch (error) {
      return res.status(400).json("fallo al logear usuario");
    }
  };
  
  module.exports = {
    register,
    getAllUsers,
    getUserById,
    getUserByEmail,
    deleteUser,
    login
  };