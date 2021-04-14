const express = require("express");
const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const db = require("knex")(connection);
const app = express();
const port = process.env.PORT || 5005;

app.use(express.json());

app.get("/", (request, response) => {
  response.send("hooray");
});
app.get("/users", async (request, response) => {
  const allUsers = await db.select("user").from("records");
  response.send(allUsers);
});

app.get("/flightlist/:user", async (request, response) => {
  const allFlights = await db.select("*").from("records").where({
    user: request.params.user,
  });
  response.send(allFlights);
});

app.post("/newflight", async (request, response) => {
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

app.listen(port, () => console.log(`listening on port: ${port}`));
