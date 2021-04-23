exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("qr_codes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("qr_codes").insert([
        {
          username: "CA",
          flightID: 0,
          url:
            "https://flightlogpics.s3-ap-northeast-1.amazonaws.com/bordingp.jpeg",
        },
        {
          username: "ysm0706glee@gmail.com",
          flightID: 6,
          url:
            "https://flightlogpics.s3-ap-northeast-1.amazonaws.com/gate.jpeg",
        },
        {
          username: "teamjetcoderz@gmail.com",
          flightID: 9,
          url:
            "https://flightlogpics.s3-ap-northeast-1.amazonaws.com/meal.jpeg",
        },
      ]);
    });
};
