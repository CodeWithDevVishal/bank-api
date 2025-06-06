const router = require("express").Router()
const { getLoan, postLoan, putLoan } = require("../controller/loanController")
router.get("/",getLoan)
router.post("/",postLoan)
router.put("/:id",putLoan)
// router.delete("/:id",deleteLoan)

module.exports = router