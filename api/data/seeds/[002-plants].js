
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {
          nickname: "Fish",
          species: "gillyweed",
          h20_frequency: 3
        },
        {
          nickname: "Tailss",
          species: "dirigible plum",
          h20_frequency: 3
        },
        {
          nickname: "Tyke",
          species: "mandrake",
          h20_frequency: 3
        },
        {
          nickname: "Pussy Patty",
          species: "bubotuber",
          h20_frequency: 3
        },
        {
          nickname: "Wiggles",
          species: "venomous tentacula",
          h20_frequency: 3
        },
        {
          nickname: "Turtle",
          species: "shrivelpig",
          h20_frequency: 3
        },
      ]);
    });
};
