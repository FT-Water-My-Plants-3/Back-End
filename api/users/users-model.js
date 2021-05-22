const db = require('../data/dbConfig')

function findAll() {
    return db('users').select('user_id', 'username', 'phone_number')
}

function findBy(filter) {
    return db('users').where(filter).orderBy('user_id')
}

function findById(user_id) {
    return db('users').select('user_id', 'username', 'phone_number').where({user_id}).first()
}

function findPlantsById(user_id) {
    return db('plants as p')
    .leftJoin('user_plants as up', 'p.plant_id', 'up.plant_id')
    .leftJoin('users as u', 'up.user_id', 'u.user_id')
    .select('p.*')
    .where('u.user_id', user_id)
}

async function addUser(user) {
    const [user_id] = await db('users').insert(user, 'user_id')
    return db('users').where({user_id}).select('user_id', 'username', 'phone_number').first()
}

function update(user_id, user) {
    return db('users').where(user_id).select('user_id', 'username', 'phone_number').update(user)
}

function remove(user_id) {
    return db('users').where({user_id}).del()
}

module.exports = {
    findAll,
    findBy,
    findById,
    findPlantsById,
    addUser,
    update,
    remove
}