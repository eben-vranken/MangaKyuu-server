const express = require("express")
const agentController = require('./controllers/agentController')
const router = express.Router()

const { catchAsync } = require("../middleware/errorHandler")

router.post('', catchAsync(agentController.createCourse))

module.exports = router;