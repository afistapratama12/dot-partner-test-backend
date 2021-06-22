const router = require('express').Router()

const userRouter = require('./userRoute')
const passRouter = require('./passRoute')

const { auth } = require('../middleware/auth')


router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'get server dot-partner backend node js express'
    })
})
router.use('/', userRouter)
router.use('/passwords', auth, passRouter)

module.exports = router