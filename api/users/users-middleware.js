const e = require('express')
const Users = require('./users-model')

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
        || !phone_number || phone_number.trim() === null
        || !password || password.trim() === null
    ) {
        res.status(400).json({
            message: `All users must have a username, phone number, and password.`
        })
    } else if (
        username.length < 3 
        || password.length < 8 
        || 10 > phone_number.length > 10
    ) {
        message: `Usernames must be longer than 3 characters, passwords must be longer than 8 characters, and phone numbers must be 10 digits`
    } else {
        next()
    }
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
    verifyUniqueUsername,
    verifyUniquePhoneNumber
}