exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("qr_codes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("qr_codes").insert([
        {
          user: "CA",
          flight_id: 0,
          url:
            "https://flightlogpics.s3-ap-northeast-1.amazonaws.com/bordingp.jpeg",
        },
        {
          user: "Takuma",
          flight_id: 1,
          url:
            "https://flightlogpics.s3-ap-northeast-1.amazonaws.com/gate.jpeg",
        },
        {
          user: "Sorai",
          flight_id: 2,
          url:
            "https://flightlogpics.s3-ap-northeast-1.amazonaws.com/meal.jpeg",
        },
      ]);
    });
};
