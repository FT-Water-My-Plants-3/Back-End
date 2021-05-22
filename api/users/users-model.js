const db = require('../data/dbConfig')

function findAll() {
    return db('users')
}

function findBy(filter) {
    return db('users').where(filter).orderBy('user_id')
}

function findById(user_id) {
    return db('users').where({user_id}).first()
}

async function addUser(user) {
    const [user_id] = await db('users').insert(user, 'user_id')
    return db('users').where({user_id}).first()
}

function update(user_id, user) {
    return db('users').where({user_id}).update(user)
}

function remove(user_id) {
    return db('users').where({user_id}).del()
}

module.exports = {
    findAll,
    findBy,
    findById,
    addUser,
    update,
    remove
}