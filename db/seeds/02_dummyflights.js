exports.seed = function (knex) {
  return knex("flights")
    .del()
    .then(function () {
      return knex("flights").insert([
        {
          username: "Merlin",
          date: "2021/04/14",
          purpose: "travel",
          flightNo: "JQ116",
          depAirport: "NRT",
          arrAirport: "ITM",
        },
        {
          username: "Merlin",
          date: "2021/02/18",
          purpose: "business",
          flightNo: "AA30",
          depAirport: "NRT",
          arrAirport: "ORD",
        },
        {
          username: "Merlin",
          date: "2021/03/02",
          purpose: "travel",
          flightNo: "JQ102",
          depAirport: "NRT",
          arrAirport: "HKG",
        },
        {
          username: "Jeff",
          date: "2021/03/23",
          purpose: "travel",
          flightNo: "JL58",
          depAirport: "NRT",
          arrAirport: "SFO",
        },
        {
          username: "Takuma",
          date: "2021/04/13",
          purpose: "travel",
          flightNo: "SQ336",
          depAirport: "SIN",
          arrAirport: "CDG",
        },
        {
          username: "Maya",
          date: "2021/01/14",
          purpose: "travel",
          flightNo: "AA32",
          depAirport: "LAX",
          arrAirport: "JFK",
        },
      ]);
    });
};
