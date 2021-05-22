const router = require('express').Router()
const {
    checkId,
    confirmUser,
    verifyUniqueUsername,
    verifyUniquePhoneNumber
} = require('./users-middleware')
const Users = require('./users-model')

// [GET] /api/users
router.get('/', (req, res, next) => {
    
})

// [GET] /api/users/:user_id

// [GET] /api/users/:user_id/:plant_id

// [POST] /api/users

// [PUT] /api/users/:user_id

// [DELETE] /api/users/:user_id

module.exports = router