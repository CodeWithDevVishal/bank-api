const Customer = require("../model/customer");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.getCustomer = async (req, res) => {
    try {
        const data = await Customer.find();
        return res.json({ errors: false, data: data });
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message });
    }
};


exports.postCustomer = async (req, res) => {
    try {
        const isCustomer = await Customer.findOne({ email: req.body.email })
        if (isCustomer) return res.json({ errors: true, message: "user already exists" })

        req.body.password = await bcrypt.hash(req.body.password, 10)
        const data = await Customer.create(req.body);

        return res.json({ errors: false, data: data });
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message });
    }
};

exports.putCustomer = async (req, res) => {
    try {
        const isCustomer = await Customer.findOne({ _id: req.params.id })
        if (!isCustomer) return res.status(500).json({ errors: true, message: "invalid detailes, user not found" })
        const data = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json({ errors: false, data: data });
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message });
    }
};

exports.deletCustomer = async (req, res) => {
    try {
        const data = await Customer.findByIdAndDelete(req.params.id);
        return res.json({ errors: false, data: data });
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message });
    }
};

exports.loginCustomer = async (req, res) => {
    try {
        const user = await Customer.findOne({ email: req.body.email })
        if (!user) return res.status(500).json({ errors: true, message: "invalid email or password" })

        const verifyPassword = await bcrypt.compare(req.body.password, user.password)
        if (!verifyPassword) return res.status(500).json({ erroers: true, message: "invalid email or password" })

        const token = await jwt.sign({ id: user._id, email: user.email, pwd: user.password }, process.env.SEC)
        return res.json({
            errors: false, data: {
                token: token,
                userData: {
                    name: user.name,
                    dateOfBirth: user.dateOfBirth,
                    phoneNumber: user.phoneNumber,
                    address: user.address
                }
            }
        })
    } catch (error) {
        return res.status(500).json({ errors: true, message })
    }
}