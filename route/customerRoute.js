const router = require("express").Router()
const { getCustomer, postCustomer, putCustomer, deletCustomer, loginCustomer } = require("../controller/customerController")
router.get("/", getCustomer)
router.post("/", postCustomer)
router.post("/login", loginCustomer)
router.put("/:id", putCustomer)
router.delete("/:id", deletCustomer)

module.exports = router