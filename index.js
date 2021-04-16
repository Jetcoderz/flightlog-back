const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const db = require("knex")(connection);
const app = express();
const port = process.env.PORT || 5005;
const API_KEY = process.env.API_KEY;

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("hooray");
});

// distinct list of users
app.get("/users", async (request, response) => {
  const allUsers = await db("flights").distinct("username");
  response.send(allUsers);
});

// get list of flight of a user
app.get("/flightlist/:username", async (request, response) => {
  const allFlights = await db.select("*").from("flights").where({
    username: request.params.username,
  });
  response.send(allFlights);
});

// post a new flight
app.post("/flightlist", async (request, response) => {
  const params = await request.body;
  await db("flights").insert({
    username: params.username,
    date: params.date,
    flightNo: params.flightNo,
    depAirport: params.depAirport,
    arrAirport: params.arrAirport,
    depGate: params.depGate,
    arrGate: params.arrGate,
    takeoff: params.takeoff,
    landing: params.landing,
    airline: params.airline,
    plane: params.plane,
    purpose: params.purpose,
    entertainment: params.entertainment,
    meal: params.meal,
    seatNo: params.seatNo,
    review: params.review,
  });
  const newFlight = await db.select("*").from("flights").where({
    username: params.username,
    date: params.date,
    flightNo: params.flightNo,
  });
  response.send(newFlight);
});

// Get Data from Aviation Stack
app.get("/aviation/:flightNum", async (request, response) => {
  const allFlights = await axios.get(
    `http://api.aviationstack.com/v1/flights?access_key=${API_KEY}&flight_iata=${request.params.flightNum}`
  );
  response.json(allFlights.data.data[0]);
});

app.listen(port, () => console.log(`listening on port: ${port}`));

module.exports.handler = serverless(app);
