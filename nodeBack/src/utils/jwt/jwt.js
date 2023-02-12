const jwt = require("jsonwebtoken");

const generateToken = (id, email) =>{
    return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn:"10d"} );

}

const veriFyJwt = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);

}

module.exports = { generateToken, veriFyJwt};