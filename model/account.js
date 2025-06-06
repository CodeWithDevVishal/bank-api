const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    // - AccountID (Primary Key)
    accountNumber: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        enum: ["savings", "checking"], 
        required: true
    },
    balance: {
        type: Number,
        default: 0,
        required: true
    },
    openDate: {
        type: Date,
        default:  Date.now
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customers",
        required: true
    },
    branchId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "branches",
        required: true
    } 
}, { timestamps: true });

module.exports = mongoose.model("accounts", accountSchema);
