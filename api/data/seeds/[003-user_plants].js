
exports.seed = function(knex) {

  return knex('user_plants').insert([
    {plant_id: 1, user_id: 1},
    {plant_id: 2, user_id: 2},
    {plant_id: 3, user_id: 3},
    {plant_id: 4, user_id: 4},
    {plant_id: 5, user_id: 5},
    {plant_id: 6, user_id: 6},
  ]);
}
