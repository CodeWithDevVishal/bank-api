const Customer = require("../model/customer");

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
        const data  = await Customer.create(req.body);
        return res.json({ errors: false, data: data });
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message });
    }
};

exports.putCustomer = async (req, res) => {
    try {
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