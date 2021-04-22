exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("qr_codes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("qr_codes").insert([
        {
          url:
            "https://flightlogpics.s3-ap-northeast-1.amazonaws.com/bordingp.jpeg",
          flightID: 1,
        },
        {
          url:
            "https://flightlogpics.s3-ap-northeast-1.amazonaws.com/gate.jpeg",
          flightID: 1,
        },
        {
          url:
            "https://flightlogpics.s3-ap-northeast-1.amazonaws.com/meal.jpeg",
          flightID: 1,
        },
        {
          url:
            "https://flightlogpics.s3-ap-northeast-1.amazonaws.com/window.jpeg",
          flightID: 1,
        },
      ]);
    });
};
