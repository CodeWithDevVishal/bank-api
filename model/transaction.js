const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({
    // - TransactionID(Primary Key)
    transactionDate:{
        type:Date,
        default:Date.now()
    },
    amount:{
        type:Number,
        required:true
    },
    transactionType:{
        type:String,
        enum:["deposit", "withdrawal"],
        required:true
    },
    accountId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "accounts",
        required:true
    }

},{timestamps:true})

module.exports = mongoose.model("transactions",transactionSchema)