const Loan = require("../model/loan")

exports.getLoan = async (req, res) => {
    try {
        const data = await Loan.find().populate("customerID")
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.postLoan = async (req, res) => {
    try {
        const data = await Loan.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.putLoan = async (req, res) => {
    try {
        const data = await Loan.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

// exports.deleteLoan = async (req,res) => {
//     try {
//         const data = await Loan.findByIdAndDelete(req.params.id)
//         return res.json({errors:false,data:data})
//     } catch (error) {
//         return res.status(500).json({errors:true,message:error.message})
//     }
// }