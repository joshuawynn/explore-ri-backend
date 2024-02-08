const router = require('express').Router()
const controller = require('../controllers/AuthController')


router.post('/login', controller.Login)
router.post('/register', controller.Register)
router.put('/update-password', controller.UpdatePassword);

module.exports = router


