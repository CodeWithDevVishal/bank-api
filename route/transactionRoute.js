const router = require("express").Router()
const { getTransaction, postTransaction } = require("../controller/transactionController")
router.get("/",getTransaction)
router.post("/",postTransaction)
// router.put("/:id",putTransaction)
// router.delete("/:id",deleteTransaction)

module.exports = router