const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
    {
        id: {
            type:Number, 
            trim: true, 
            required:true
        }, 
        name: {
            type:String, 
            trim: true, 
            required:true
        }, 
        image: {
            type:String, 
            trim: true, 
        }, 
        imageDetail: [{
            type:String, 
            trim: true, 
            required:true
        }], 
        enlace: {
            type:String, 
            trim: true, 
            required:true
        }, 
        description: {
            type:String, 
            trim: true, 
            required:true
        },
        ubication: {
            type:String, 
            trim: true, 
            required:true
        },
        stars: {
            type:Number, 
            trim: true, 
            required:true
        },
        rating: {
            type:Number, 
            trim: true, 
            required:true
        },
        pricePerNight: {
            type:Number, 
            trim: true, 
            required:true
        },
        capacity: {
            type:String, 
            trim: true, 
            required:true
        }, 
        
    },{
        timestamps: true,
    }
);

const Hotel = mongoose.model("hotel", hotelSchema);
module.exports = Hotel;