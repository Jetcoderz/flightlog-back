const express = require("express");
const app = express();
const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const database = require("knex")(connection);
const port = process.env.PORT || 5005;

app.get("/", (request, response) => {
  response.send("hooray");
});

app.listen(port, () => console.log(`listening on port: ${port}`));
