
exports.up = function(knex) {
    return knex.schema
    .createTable('users', tbl => {
        tbl.increments('user_id')
        tbl.string('username').notNullable().unique()
        tbl.string('phone_number').notNullable().unique()
        tbl.string('password').notNullable()
    })
    .createTable('plants', tbl => {
        tbl.increments('plant_id')
        tbl.string('nickname').notNullable()
        tbl.string('species').notNullable()
        tbl.integer('h20_frequency').notNullable()
        tbl.string('image')
    })
    .createTable('user_plants', tbl => {
        tbl.increments('up_id')
        tbl.integer('plant_id')
            .unsigned()
            .notNullable()
            .references('plant_id')
            .inTable('plants')
            .onDelete('CASCADE')
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('user_id')
            .inTable('users')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('user_plants')
  .dropTableIfExists('plants')
  .dropTableIfExists('users')
};
