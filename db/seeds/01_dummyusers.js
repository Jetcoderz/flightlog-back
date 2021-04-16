exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "Merlin",
          pw: "eatm1ce",
        },
        {
          username: "Takuma",
          pw: "123",
        },
        {
          username: "Jeff",
          pw: "0p;/9ol.",
        },
        {
          username: "Maya",
          pw: "1234",
        },
      ]);
    });
};
