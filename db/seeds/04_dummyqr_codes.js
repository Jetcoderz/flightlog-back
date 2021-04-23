exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("qr_codes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("qr_codes").insert([
        {
          username: "mayashinagawa@gmail.com",
          flightID: 0,
          url:
            "https://flightlogpics.s3-ap-northeast-1.amazonaws.com/bordingp.jpeg",
        },
        {
          username: "ysm0706glee@gmail.com",
          flightID: 1,
          url:
            "https://flightlogpics.s3-ap-northeast-1.amazonaws.com/gate.jpeg",
        },
        {
          username: "teamjetcoderz@gmail.com",
          flightID: 2,
          url:
            "https://flightlogpics.s3-ap-northeast-1.amazonaws.com/meal.jpeg",
        },
      ]);
    });
};
