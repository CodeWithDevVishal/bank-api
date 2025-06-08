const jwt = require("jsonwebtoken")

const isAuth = async (req,res,next) => {
    try {
        const token = req.header("auth-token")
        const verifyToken = jwt.verify(token,process.env.SEC)
        if(!verifyToken) return res.status(500).json({errors:true,message:"Access denied"})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}