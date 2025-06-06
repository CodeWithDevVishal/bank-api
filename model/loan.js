const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema({
    // - LoanID(Primary Key)
    loanAmount:{
        type:Number,
        required:true
    },
    interestRate:{
        type:Number,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    customerID:{
        type:mongoose.Schema.ObjectId,
        ref: "customers", 
        required:true
    }

},{timestamps:true})

module.exports = mongoose.model("loans",loanSchema)