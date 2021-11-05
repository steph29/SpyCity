"use strict";

var express = require("express");

var cors = require("cors");

var firebase = require("firebase/database");

var bodyParser = require("body-parser");

var url = "https://spyfield-b2064-default-rtdb.europe-west1.firebasedatabase.app";
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST, DELETE, UPDATE,PATCH, OPTIONS");
  next();
}); // ******* PERSON DATA *********
// Create data on agent

app.post(url + "/agent.json", function (req, res, next) {
  var person = req.body;
  console.log(person);
  res.status(201).json({
    message: "Person fetched successfully!"
  });
});
app.get(url + "/agent.json", function (req, res, next) {
  var persons = {
    type: "Agent",
    name: "Pan",
    firstname: "Peter",
    callsign: "Hey Peeeteer",
    birthday: "27 / 08 / 1987",
    nationality: 14,
    speciality: 5
  };
  res.status(200).json({
    message: "Persons fetched successfully!",
    person: persons
  });
}); // ******* MISSION DATA *********
// Create mission

app.post(url + "/missions.json", function (req, res, next) {
  res.status(201).json({
    message: "Mission fetched successfully"
  });
  next();
}); // Read data on mission

app.get(url + "/missions.json", function (req, res, next) {}); // Updatde data on mission

app.put(url + "/missions.json", function (req, res, next) {}); // Delete data on mission

app["delete"](url + "/missions.json", function (req, res, next) {});
module.exports = app;