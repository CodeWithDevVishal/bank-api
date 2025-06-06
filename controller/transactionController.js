const Transaction = require("../model/transaction")

exports.getTransaction = async (req, res) => {
    try {
        const data = await Transaction.find().populate("accountId")
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}


exports.postTransaction = async (req, res) => {
    try {
        const data = await Transaction.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

// exports.putTransaction = async (req,res) => {
//     try {
//         const data = await Transaction.findByIdAndUpdate(req.params.id,req.body,{new:true})
//         return res.json({errors:false,data:data})
//     } catch (error) {
//         return res.status(500).json({errors:true,message:error.message})
//     }
// }

// exports.deleteTransaction = async (req,res) => {
//     try {
//         const data = await Transaction.findByIdAndDelete(req.params.id)
//         return res.json({errors:false, data:data})
//     } catch (error) {
//         return res.status(500).json({errors:true,message:error.message})
//     }
// }