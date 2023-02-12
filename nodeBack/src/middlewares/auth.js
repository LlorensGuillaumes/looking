const User = require("../api/users/user.model");
const { verifyJwt } = require("../utils/jwt/jwt");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(400).json("no estás logueado");
    }

    const parsedToken = token.replace("Bearer ", "");
    const validToken = verifyJwt(parsedToken);
    const userLogued = await User.findById(validToken.id);

    userLogued.password = null;
    req.user = userLogued;
    next();
  } catch (error) {
    return res.status(400).json("no estás bien logueado");
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(400).json("no estás logueado");
    }

    const parsedToken = token.replace("Bearer ", "");
    const validToken = verifyJwt(parsedToken);
    const userLogued = await User.findById(validToken.id);

    if (userLogued.rol === "admin") {
      userLogued.password = null;
      req.user = userLogued;
      next();
    } else {
      return res.status(400).json("no tienes permisos de administrador");
    }
  } catch (error) {
    return res.status(400).json("error en la función de isAdmin");
  }
};

const isHotelOwner = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
  
      if (!token) {
        return res.status(400).json("no estás logueado");
      }
  
      const parsedToken = token.replace("Bearer ", "");
      const validToken = verifyJwt(parsedToken);
      const userLogued = await User.findById(validToken.id);
  
      if (userLogued.rol === "hotelOwner" || userLogued.rol === "admin") {
        userLogued.password = null;
        req.user = userLogued;
        next();
      } else {
        return res.status(400).json("no tienes permisos hotelero ni administrador");
      }
    } catch (error) {
      return res.status(400).json("error en la función de isHotelOwner");
    }
  };

module.exports = { isAuth, isAdmin, isHotelOwner };