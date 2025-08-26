const express = require('express')
const router = express.Router()
const UserController = require('../controller/UserController')



router.get('/login', UserController.login)
router.post('/login', UserController.loginPost)
router.post('/register', UserController.register)

module.exports = router