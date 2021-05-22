const router = require('express').Router()
const {
    checkId,
    confirmUser,
    confirmLoginFields,
    verifyLogin,
    verifyUniqueUsername,
    verifyUniquePhoneNumber
} = require('./users-middleware')
const restricted = require('../middleware/restricted')
const tokenBuilder = require('../middleware/token-builder')
const Users = require('./users-model')
const bcrypt = require('bcryptjs')

// [GET] /api/users
router.get('/', restricted, (req, res, next) => {
    Users.findAll()
    .then(users => {
        res.json(users)
    })
    .catch(next)
})

// [GET] /api/users/:user_id
router.get('/:user_id', restricted, checkId, (req, res, next) => {
    const {user_id} = req.params
    Users.findById(user_id)
    .then(user => {
        res.json(user)
    })
    .catch(next)
})

// [GET] /api/users/:user_id/:plant_id
router.get('/:user_id/plants', restricted, checkId, (req, res, next) => {
    const {user_id} = req.params
    Users.findPlantsById(user_id)
    .then(user => {
        res.json(user)
    })
    .catch(next)
})




// [POST] /api/users
router.post('/register', confirmUser,
verifyUniqueUsername,
verifyUniquePhoneNumber,
(req, res, next) => {
    const {username, password, phone_number} = req.body
    const trimUser = username.trim()
    const hash = bcrypt.hashSync(password, 8)

    Users.addUser({username: trimUser, password: hash, phone_number})
    .then(user => {
        res.status(201).json(user)
    })
    .catch(next)
})

// [POST] 
router.post('/login', confirmLoginFields, verifyLogin, (req, res, next) => {
    const {username} = req.body

    Users.findBy({username})
    .then(([user]) => {
        const token = tokenBuilder(user)
        res.json({
            message: `Login successful`,
            token
        })
    })
    .catch(next)
})

// [PUT] /api/users/:user_id
router.put('/:user_id', restricted, checkId, confirmUser, (req, res, next) => {
    const {username, password, phone_number} = req.body
    const hash = bcrypt.hashSync(password, 8)
    // const trimUser = username.trim()

    Users.update(req.params, {username, password: hash, phone_number})
    .then(() => {
        res.status(200).json(req.body)
    })
    .catch(next)
})

// [DELETE] /api/users/:user_id
router.delete('/:user_id', restricted, checkId, (req, res, next) => {
    Users.remove(req.params.user_id)
    .then(() => {
        res.status(200).json({
            message: `Sorry you hate plants.`
        })
    })
    .catch(next)
})

module.exports = router