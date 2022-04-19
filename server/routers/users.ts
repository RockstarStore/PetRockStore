const express2 = require('express')
const router = express2.Router();
const userController = require('../controllers/userController')

// Create user
router.post('/', userController.createUser, (req:any, res:any)=> {
    res.status(200).json(res.locals.createUser)
})

// Verify user


module.exports = router; 