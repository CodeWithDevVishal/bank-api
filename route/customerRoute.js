const router = require("express").Router()
const { getCustomer, postCustomer, putCustomer, deletCustomer } = require("../controller/customerController")
router.get("/", getCustomer)
router.post("/", postCustomer)
router.put("/:id", putCustomer)
router.delete("/:id", deletCustomer)

module.exports = router