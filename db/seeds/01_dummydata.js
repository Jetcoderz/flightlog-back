exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("records")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("records").insert([
        {
          user: "Merlin",
          date: "2021/04/14",
          purpose: "travel",
          flightNo: "JQ116",
          departure: "NRT",
          arrival: "ITM",
        },
        {
          user: "Merlin",
          date: "2021/02/18",
          purpose: "business",
          flightNo: "AA30",
          departure: "NRT",
          arrival: "ORD",
        },
        {
          user: "Merlin",
          date: "2021/03/02",
          purpose: "travel",
          flightNo: "JQ102",
          departure: "NRT",
          arrival: "HKG",
        },
        {
          user: "Jeff",
          date: "2021/03/23",
          purpose: "travel",
          flightNo: "JL58",
          departure: "NRT",
          arrival: "SFO",
        },
        {
          user: "Takuma",
          date: "2021/04/13",
          purpose: "travel",
          flightNo: "SQ336",
          departure: "SIN",
          arrival: "CDG",
        },
        {
          user: "Maya",
          date: "2021/01/14",
          purpose: "travel",
          flightNo: "AA32",
          departure: "LAX",
          arrival: "JFK",
        },
      ]);
    });
};
