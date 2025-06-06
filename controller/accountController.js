const Account = require("../model/account")

exports.getAccount = async (req,res) => {
    try {
        const data = await Account.find().populate("customerId").populate("branchId")
       
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postAccount = async (req,res)=> {
    try {
        const data = await Account.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.putAccount = async (req,res) => {
    try {
        const data = await Account.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
         return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteAccount = async (req,res) => {
    try {
        const data = await Account.findByIdAndDelete(req.params.id)
        return res.json({errors:false, data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}