const express = require("express");
const cors = require("cors");
const firebase = require("firebase/database");
const bodyParser = require("body-parser");

const url =
  "https://spyfield-b2064-default-rtdb.europe-west1.firebasedatabase.app";
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST, DELETE, UPDATE,PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.post(url + "/agent.json", (req, res, next) => {
  res.status(201).json({
    message: "Person fectched succesfully!",
  });
});
module.exports = app;
