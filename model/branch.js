const mongoose = require("mongoose")

const branchSchema = new mongoose.Schema({
    // - BranchID(Primary Key)
    branchName:{
        type:String,
        required:true
    },
    branchLocation:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    }

},{timestamps:true})

module.exports = mongoose.model("branches",branchSchema)