const router = require('express').Router()

// const { auth } = require('../middleware/auth')

const PasswordController = require('../controllers/passwordController')

router.get("/", PasswordController.getByUserLogin)
router.get('/:id', PasswordController.getPassByID)
router.post('/', PasswordController.addPassword)
router.put('/:id', PasswordController.updatePassword)
router.delete('/:id',PasswordController.deletePassword)