const router = require('express').Router()
const {checkId, confirmPlant} = require('./plants-middleware')
const Plants = require('./plants-model')
const Users = require('../users/users-model')
const { route } = require('../users/users-router')


router.get('/', (req, res, next) => {
    Plants.findAll()
    .then(plants => {
        res.json(plants)
    })
    .catch(next)
})


router.get('/:plant_id', checkId, (req, res, next) => {
    const {plant_id} = req.params
    Plants.findById(plant_id)
    .then(plant => {
        res.json(plant)
    })
    .catch(next)
})


router.post('/user/:user_id', confirmPlant, (req, res, next) => {
    Plants.addPlant(req.body, req.params)
    .then(plant => {
        res.status(201).json(plant)
    })
    .catch(next)
})


router.put('/:user_id/:plant_id', checkId,  confirmPlant, (req, res, next) => {
    Plants.update(req.params.plant_id, req.body)
    .then(() => {
        res.status(200).json(req.body)
    })
    .catch(next)
})


router.delete('/:user_id/:plant_id', checkId, (req, res, next) => {
    Plants.remove(req.params.plant_id)
    .then(() => {
        res.status(200).json({
            message: `Did your plant die? That's okay. I'm only judging you the slightest bit.`
        })
    })
    .catch(next)
})

module.exports = router