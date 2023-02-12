const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
        require: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    rol: {
        type: String,
        enum: ['admin', 'user', 'hotelOwner'],
        default: 'user',
        trim: true,
        required: true,
    },
});

userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

const User = mongoose.model('users', userSchema);
module.exports = User;