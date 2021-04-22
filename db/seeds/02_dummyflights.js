exports.seed = function (knex) {
  return knex("flights")
    .del()
    .then(function () {
      return knex("flights").insert([
        {
          username: "fjmarino90@gmail.com",
          date: "2021/04/14",
          purpose: "travel",
          flightNo: "JL3003",
          airlineICAO: "JAL",
          depAirport: "NRT",
          arrAirport: "ITM",
        },
        {
          username: "fjmarino90@gmail.com",
          date: "2021/02/18",
          purpose: "business",
          flightNo: "AA30",
          airlineICAO: "AAL",
          depAirport: "NRT",
          arrAirport: "ORD",
        },
        {
          username: "fjmarino90@gmail.com",
          date: "2021/03/02",
          purpose: "travel",
          flightNo: "CX521",
          airlineICAO: "CPA",
          depAirport: "NRT",
          arrAirport: "HKG",
        },
        {
          username: "cyjeff@gmail.com",
          date: "2021/03/23",
          purpose: "travel",
          flightNo: "JL58",
          airlineICAO: "JAL",
          depAirport: "NRT",
          arrAirport: "SFO",
        },
        {
          username: "cyjeff@gmail.com",
          date: "2021/02/23",
          purpose: "travel",
          flightNo: "NH239",
          airlineICAO: "ANA",
          depAirport: "HND",
          arrAirport: "FUK",
        },
        {
          username: "ysm0706glee@gmail.com",
          date: "2021/04/13",
          purpose: "travel",
          flightNo: "SQ336",
          airlineICAO: "SIA",
          depAirport: "SIN",
          arrAirport: "CDG",
        },
        {
          username: "mayashinagawa@gmail.com",
          date: "2021/01/14",
          purpose: "travel",
          flightNo: "AA32",
          airlineICAO: "AAL",
          depAirport: "LAX",
          arrAirport: "JFK",
        },
        {
          username: "mayashinagawa@gmail.com",
          date: "2021/04/13",
          flightNo: "SQ336",
          depGate: "56",
          arrGate: "2",
          depAirport: "SIN",
          arrAirport: "CDG",
          takeoff: "2021-04-19T07:15:00+00:00",
          landing: "2021-04-19T09:15:00+00:00",
          airlineICAO: "SIA",
          purpose: "Business",
          entertainment: ["Watching drama", "Reading a book"],
          meal: "fish",
          seatNo: "5A",
          review: "Excellent",
        },
        {
          username: "teamjetcoderz@gmail.com",
          date: "2021/02/13",
          flightNo: "JL319",
          depGate: "13",
          arrGate: "2",
          depAirport: "HND",
          arrAirport: "FUK",
          takeoff: "2021-02-13T13:00:00+00:00",
          landing: "2021-02-13T14:55:00+00:00",
          airlineICAO: "JAL",
          purpose: "Business",
          entertainment: ["Movie", "Music"],
          meal: "Chicken",
          seatNo: "10F",
          review: "Nice weather",
        },
        {
          username: "teamjetcoderz@gmail.com",
          date: "2021/02/28",
          flightNo: "NH2477",
          depGate: "54",
          arrGate: "1",
          depAirport: "HND",
          arrAirport: "KOJ",
          takeoff: "2021-02-28T15:25:00+00:00",
          landing: "2021-02-28T17:25:00+00:00",
          airlineICAO: "ANA",
          purpose: "Business",
          entertainment: ["Movie", "Music"],
          meal: "Fish",
          seatNo: "15B",
          review: "Busy trip",
        },
        {
          username: "teamjetcoderz@gmail.com",
          date: "2021/03/06",
          flightNo: "JL119",
          depGate: "12",
          arrGate: "7",
          depAirport: "HND",
          arrAirport: "ITM",
          takeoff: "2021-03-06T13:30:00+00:00",
          landing: "2021-03-06T14:35:00+00:00",
          airlineICAO: "JAL",
          purpose: "Business",
          entertainment: ["Reading"],
          meal: "Pork",
          seatNo: "1H",
          review: "With manager",
        },
        {
          username: "teamjetcoderz@gmail.com",
          date: "2021/03/15",
          flightNo: "KE704",
          depGate: "25",
          arrGate: "264",
          depAirport: "NRT",
          arrAirport: "ICN",
          takeoff: "2021-03-15T14:55:00+00:00",
          landing: "2021-03-15T17:30:00+00:00",
          airlineICAO: "KAL",
          purpose: "Business",
          entertainment: ["Reading"],
          meal: "Noodle",
          seatNo: "7C",
          review: "Had a PCR test",
        },
        {
          username: "teamjetcoderz@gmail.com",
          date: "2021/03/29",
          flightNo: "NH553",
          depGate: "46",
          arrGate: "3",
          depAirport: "HND",
          arrAirport: "HKD",
          takeoff: "2021-03-29T09:55:00+00:00",
          landing: "2021-03-29T11:15:00+00:00",
          airlineICAO: "ANA",
          purpose: "Travel",
          entertainment: ["Game"],
          meal: "Noodle",
          seatNo: "2H",
          review: "Family Trip",
        },
        {
          username: "teamjetcoderz@gmail.com",
          date: "2021/04/05",
          flightNo: "NH401",
          depGate: "52",
          arrGate: "2",
          depAirport: "HND",
          arrAirport: "AXT",
          takeoff: "2021-04-05T07:45:00+00:00",
          landing: "2021-04-05T08:50:00+00:00",
          airlineICAO: "ANA",
          purpose: "Business",
          entertainment: ["Magazine"],
          meal: "Pork",
          seatNo: "7C",
          review: "A heavy rainy day",
        },
        {
          username: "teamjetcoderz@gmail.com",
          date: "2021/04/12",
          flightNo: "JL375",
          depGate: "4",
          arrGate: "3",
          depAirport: "HND",
          arrAirport: "KKJ",
          takeoff: "2021-04-12T13:30:00+00:00",
          landing: "2021-04-12T14:35:00+00:00",
          airlineICAO: "JAL",
          purpose: "Business",
          entertainment: ["Movie"],
          meal: "Beef",
          seatNo: "3J",
          review: "With manager",
        },
      ]);
    });
};
