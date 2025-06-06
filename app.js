const express = require("express")
const mongoose = require("mongoose")
require("dotenv/config")
const cors = require("cors")

const customerRouter = require("./route/customerRoute")
const accountRouter = require("./route/accountRoute")
const branchRouter = require("./route/branchRoute")
const transactionRouter = require("./route/transactionRoute")
const loanRouter = require("./route/loanRoute")

const app = express()
app.use(express.json())
app.use(cors())
app.get("/", (req, res) => {
    res.send("hii welcom to Janata Bank")
})

app.use("/api/customer", customerRouter)
app.use("/api/account", accountRouter)
app.use("/api/branch", branchRouter)
app.use("/api/transaction", transactionRouter)
app.use("/api/loan", loanRouter)


app.listen(process.env.PORT, () => { console.log("running....🏃‍♂️‍➡️"); })

async function db() {
    try {
        const con = await mongoose.connect(process.env.DB)
        console.log(con.default.STATES.connected);

    } catch (error) {
        console.log(error.message);
    }
} db()