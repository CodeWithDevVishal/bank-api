const router = require("express").Router()
const { getAccount, postAccount, putAccount, deleteAccount } = require("../controller/accountController")
router.get("/",getAccount)
router.post("/",postAccount)
router.put("/:id",putAccount)
router.delete("/:id",deleteAccount)

module.exports = router