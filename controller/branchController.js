const Branch = require("../model/branch")

exports.getBranch = async (req, res) => {
    try {
        // console.log(req.headers['message']);
         
        const data = await Branch.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.postBranch = async (req, res) => {
    try { 
        const data = await Branch.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.putBranch = async (req, res) => {
    try {
        const data = await Branch.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.deleteBranch = async (req, res) => {
    try {
        const data = await Branch.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}