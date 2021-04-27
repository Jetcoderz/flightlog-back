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

// get list of flight of a user
app.get("/flightlist/:username", async (request, response) => {
  const allFlights = await db
    .select("*")
    .from("flights")
    .where({
      username: request.params.username,
    })
    .orderBy("date", "desc");
  response.send(allFlights);
});

// get list of all photo urls for a flight
app.get("/photos/:flightID", async (request, response) => {
  const allPhotos = await db.select("*").from("photos").where({
    flightID: request.params.flightID,
  });
  response.send(allPhotos);
});

// delete a photo
app.delete("/photos/:photoID", async (request, response) => {
  await db("photos").where({ id: request.params.photoID }).del();
  response.send("Deleted");
});

// delete a flight
app.delete("/flightlist/:flightID", async (request, response) => {
  await db("flights").where({ id: request.params.flightID }).del();
  await db("photos").where({ flightID: request.params.flightID }).del();
  response.send("Deleted");
});

// add photo urls for a flight
app.post("/photos", async (request, response) => {
  await db("photos").insert({
    url: request.body.url,
    flightID: request.body.flightID,
  });
  const newPhotos = await db.select("*").from("photos").where({
    flightID: request.body.flightID,
  });
  response.send(newPhotos);
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
    airlineICAO: params.airlineICAO,
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

// get a qr-code url for a flight
app.get("/qr-codes/:username", async (request, response) => {
  const qrCode = await db.select("*").from("qr_codes").where({
    username: request.params.username,
  });
  response.send(qrCode);
});

// add qr-code url for a flight
app.post("/qr-codes", async (request, response) => {
  await db("qr_codes").insert({
    username: request.body.username,
    flightID: request.body.flightID,
    url: request.body.url,
  });
  const newQrCode = await db.select("*").from("qr_codes").where({
    flightID: request.body.flightID,
  });
  response.send(newQrCode);
});

// AWS Setup
const AWS = require("aws-sdk");
const credentials = {
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
};
AWS.config.update({
  credentials: credentials,
  region: "ap-northeast-1",
  signatureVersion: "v4",
});
const s3 = new AWS.S3();

// Return AWS presigned URL: PUT
app.get("/awsPUT/:file", async (request, response) => {
  const presignedPUTURL = s3.getSignedUrl("putObject", {
    Bucket: "flightlogpics",
    Key: request.params.file,
    Expires: 100,
  });

  response.send(presignedPUTURL);
});

// Return AWS presigned URL: GET
app.get("/awsGET/:file", async (request, response) => {
  const presignedGETURL = s3.getSignedUrl("getObject", {
    Bucket: "flightlogpics",
    Key: request.params.file,
    Expires: 100,
  });

  response.send(presignedGETURL);
});

app.listen(port, () => console.log(`listening on port: ${port}`));

module.exports.handler = serverless(app);
