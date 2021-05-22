
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: "connie",
          phone_number: "1118675309",
          password: "password"
        },
        {
          username: "michael",
          phone_number: "2228675309",
          password: "password"
        },
        {
          username: "dave",
          phone_number: "3338675309",
          password: "password"
        },
        {
          username: "veronica",
          phone_number: "4448675309",
          password: "password"
        },
        {
          username: "jonathan",
          phone_number: "5558675309",
          password: "password"
        },
        {
          username: "daniel",
          phone_number: "6668675309",
          password: "password"
        }
      ]);
    });
};
