const db = require('../data/dbConfig')

function findAll() {
    return db('plants as p')
    .leftJoin('user_plants as up', 'p.plant_id', 'up.plant_id')
    .leftJoin('users as u', 'up.user_id', 'u.user_id')
    .select(
        'p.*',
        'u.user_id as plant_owner_id',
        'u.username as plant_owner'
    )
}

function findBy(filter) {
    return db('plants as p')
    .where(filter)
    .orderBy('plant_id')
}

function findById(plant_id) {
    return db('plants as p')
    .leftJoin('user_plants as up', 'p.plant_id', 'up.plant_id')
    .leftJoin('users as u', 'up.user_id', 'u.user_id')
    .select(
        'p.*',
        'u.user_id as plant_owner_id',
        'u.username as plant_owner'
    )
    .where('p.plant_id', plant_id)
    .first()
}

async function addPlant(plant, user_id) {
    console.log(user_id)
    const [plant_id] = await db('plants').insert(plant, 'plant_id')
    await db('user_plants').insert({plant_id: plant_id, user_id:user_id.user_id})
    return db('plants').where({plant_id}).first()
}

function update(plant_id, plant) {
    return db('plants').where({plant_id}).update(plant)
}

function remove(plant_id) {
    return db('plants').where({plant_id}).del()
}

module.exports = {
    findAll,
    findBy,
    findById,
    addPlant,
    update,
    remove
}