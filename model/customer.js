const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    //- CustomerID (Primary Key)
    name: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type:Date,
        required: true
    },
    email: {
        type: String,
        unique:true,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }, 
    address: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    }

}, { timestamps: true })

module.exports = mongoose.model("customers", customerSchema)