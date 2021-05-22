
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: "connie",
          phone_number: "1118675309",
          password: "$2a$08$6t/Zvuz6xVB5MjHgwLgh6Oq7aMUqPpaUpQ0zRW58N.kVlFvEskhs2"
        },
        {
          username: "michael",
          phone_number: "2228675309",
          password: "$2a$08$1OSX9kRoNw8IXlzhJNhPf.xknY/OE55pkDXRJsDavylTGcNG1dBqm"
        },
        {
          username: "dave",
          phone_number: "3338675309",
          password: "$2a$08$5btnUyeunm.EJ3jyOB4Dle7C74EhNHxMlD2Op.K0k9n8LhqrzVxR6"
        },
        {
          username: "veronica",
          phone_number: "4448675309",
          password: "$2a$08$dmx2I5XmkBqTcenYvY0Pd.cj/vFLq9ZslXDL3fM0t054tNYzzGvBa"
        },
        {
          username: "jonathan",
          phone_number: "5558675309",
          password: "$2a$08$gPmCPOnaL9PIYdIH2Ub.a.yFo34f/mI2WkdoLXzJw4hMPTRi/FByG"
        },
        {
          username: "daniel",
          phone_number: "6668675309",
          password: "$2a$08$eqv6ybVuQ6P//42MDE60hOxPW2wsruFyk7n1sulsL8RgeLak1bKZ."
        }
      ]);
    });
};
