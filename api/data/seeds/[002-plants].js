
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {
          nickname: "Fish",
          species: "gillyweed",
          h2o_frequency: 3
        },
        {
          nickname: "Tailss",
          species: "dirigible plum",
          h2o_frequency: 3
        },
        {
          nickname: "Tyke",
          species: "mandrake",
          h2o_frequency: 3
        },
        {
          nickname: "Pussy Patty",
          species: "bubotuber",
          h2o_frequency: 3
        },
        {
          nickname: "Wiggles",
          species: "venomous tentacula",
          h2o_frequency: 3
        },
        {
          nickname: "Turtle",
          species: "shrivelpig",
          h2o_frequency: 3
        },
      ]);
    });
};
