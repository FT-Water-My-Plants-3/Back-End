const Users = require('./users-model')
const bcrypt = require('bcryptjs')

const checkId = (req, res, next) => {
    const id = req.params.user_id
    Users.findById(id)
    .then(user => {
        if(!user) {
            res.status(404).json({
                message: `User doesn't exist`
            })
        } else {
            next()
        }
    })
    .catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
}

const confirmUser = (req, res, next) => {
    const {username, phone_number, password} = req.body
    if (
        !username || username.trim() === null
        || !phone_number || phone_number === null
        || !password || password.trim() === null
    ) {
        res.status(400).json({
            message: `All users must have a username, phone number, and password.`
        })
    } else {
        next()
    }
}

const confirmLoginFields = (req, res, next) => {
    const {username, password} = req.body
    if (
        !username || username.trim() === null
        || !password || password.trim() === null
    ) {
        res.status(422).json({
            message: `Username and password required`
        })
    } else {
        next()
    }
}

const verifyLogin = (req, res, next) => {
    const {username, password} = req.body
  
    Users.findBy({username})
    .then(([user]) => {
        const token = bcrypt.hashSync(password, 8)
        if (user && bcrypt.compareSync(password, user.password)) {
            next()
        } else {
            res.status(401).json({
                message: `invalid credentials`, token
            })
        }
    })
}

const verifyUniqueUsername = (req, res, next) => {
    const {username} = req.body
    Users.findBy({username})
    .then(([username]) => {
        if(username) {
            res.status(422).json({
                message: `Username already exists`
            })
        } else {
            next()
        }
    })
}

const verifyUniquePhoneNumber = (req, res, next) => {
    const {phone_number} = req.body
    Users.findBy({phone_number})
    .then(([phone_number]) => {
        if(phone_number) {
            res.status(422).json({
                message: `Phone number already taken`
            })
        } else {
            next()
        }
    })
}

module.exports = {
    checkId,
    confirmUser,
    confirmLoginFields,
    verifyLogin,
    verifyUniqueUsername,
    verifyUniquePhoneNumber
}