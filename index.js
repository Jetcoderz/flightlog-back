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
  const allUsers = await db("records").distinct("user");
  response.send(allUsers);
});

// get list of flight of a user
app.get("/flightlist/:user", async (request, response) => {
  const allFlights = await db.select("*").from("records").where({
    user: request.params.user,
  });
  response.send(allFlights);
});

// post a new flight
app.post("/flightlist", async (request, response) => {
  const params = await request.body;
  await db("records").insert({
    user: params.user,
    date: params.date,
    flightNo: params.flightNo,
  });
  const newFlight = await db
    .select("*")
    .from("records")
    .where({ user: params.user, date: params.date, flightNo: params.flightNo });
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
