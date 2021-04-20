exports.seed = function (knex) {
  return knex("flights")
    .del()
    .then(function () {
      return knex("flights").insert([
        {
          username: "Merlin",
          date: "2021/04/14",
          purpose: "travel",
          flightNo: "JL3003",
          airlineICAO: "JAL",
          depAirport: "NRT",
          arrAirport: "ITM",
        },
        {
          username: "Merlin",
          date: "2021/02/18",
          purpose: "business",
          flightNo: "AA30",
          airlineICAO: "AAL",
          depAirport: "NRT",
          arrAirport: "ORD",
        },
        {
          username: "Merlin",
          date: "2021/03/02",
          purpose: "travel",
          flightNo: "CX521",
          airlineICAO: "CPA",
          depAirport: "NRT",
          arrAirport: "HKG",
        },
        {
          username: "Jeff",
          date: "2021/03/23",
          purpose: "travel",
          flightNo: "JL58",
          airlineICAO: "JAL",
          depAirport: "NRT",
          arrAirport: "SFO",
        },
        {
          username: "Jeff",
          date: "2021/02/23",
          purpose: "travel",
          flightNo: "NH239",
          airlineICAO: "ANA",
          depAirport: "HND",
          arrAirport: "FUK",
        },
        {
          username: "Takuma",
          date: "2021/04/13",
          purpose: "travel",
          flightNo: "SQ336",
          airlineICAO: "SIA",
          depAirport: "SIN",
          arrAirport: "CDG",
        },
        {
          username: "Maya",
          date: "2021/01/14",
          purpose: "travel",
          flightNo: "AA32",
          airlineICAO: "AAL",
          depAirport: "LAX",
          arrAirport: "JFK",
        },
      ]);
    });
};
