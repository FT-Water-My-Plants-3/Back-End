
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
        },
        {
          "username": "alexedwards",
          "phone_number": "1111111111",
          "password": "$2a$08$mGcMOv19lgGXRryGJB.2V.28v8G0vxg7YEVYDo9tAMNALctWRcSY2"
        },
        {
          "username": "jacobfranklin",
          "phone_number": "2222222222",
          "password": "$2a$08$VrVJss.o7RNAxiirjdOlOun8IOV6vEKBRDhB.elMQZ6TcjK729HFG"
        },
        {
          "username": "michaelhabermas",
          "phone_number": "3333333333",
          "password": "$2a$08$pCDSa.x/f1YdpGitlFjfYuSTMx.zTLYkmLBxm430v40TB/bB6nEde"
        },
        {
          "username": "spencerpatterson",
          "phone_number": "4444444444",
          "password": "$2a$08$S5jj9BEQvO4FfxPMeMSHWu57dA7bj5pP.4JqtBWqW1Vdmqo.gBh1q"
        },
        {
          "username": "anthony_miller",
          "phone_number": "1234567890",
          "password": "$2a$08$g/tTSBrEovi7Fe/s9cGCkO6LCW.6YSq4FDG.m7g8NFAwgSGLZKfsy"
        },
        {
          "username": "adam_pattison",
          "phone_number": "2345678901",
          "password": "$2a$08$RyFuLa5malFiqfxTo3YSh..bthCC0bNKCr0xUCkqMOd1b/lhsJr1C"
        },
        {
          "username": "zachary_cooremans",
          "phone_number": "3456789012",
          "password": "$2a$08$YCSOKz59ie/s..YTW9.N1eGRrQfFGT3BHNXGJYi4FRFLW9E03VLXC"
        }
      ]);
    });
};
