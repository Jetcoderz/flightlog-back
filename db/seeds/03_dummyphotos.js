exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("photos")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("photos").insert([
        {
          url:
            "https://flightlogpics.s3-ap-northeast-1.amazonaws.com/bordingp.jpeg",
          flightID: 15,
        },
        {
          url:
            "https://flightlogpics.s3-ap-northeast-1.amazonaws.com/gate.jpeg",
          flightID: 15,
        },
        {
          url:
            "https://flightlogpics.s3-ap-northeast-1.amazonaws.com/meal.jpeg",
          flightID: 15,
        },
        {
          url:
            "https://flightlogpics.s3-ap-northeast-1.amazonaws.com/window.jpeg",
          flightID: 15,
        },
      ]);
    });
};
