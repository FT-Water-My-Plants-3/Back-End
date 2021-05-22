const Plants = require('./plants-model')

const checkId = (req, res, next) => {
    const id = req.params.plant_id
    Plants.findById(id)
    .then(plant => {
        if(!plant) {
            res.status(404).json({
                message: `Plant doesn't exist`
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

const confirmPlant = (req, res, next) => {
    const {nickname, species, h20_frequency} = req.body
    if (
        !nickname || nickname.trim() === null
        || !species || species.trim() === null
        || !h20_frequency
    ) {
        res.status(400).json({
            message: `All plants must have a nickname, species, and watering frequency.`
        })
    } else {
        next()
    }
}

module.exports = {
    checkId,
    confirmPlant
}