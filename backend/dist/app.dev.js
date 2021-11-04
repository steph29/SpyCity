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
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.post(url + "/agent.json", function (req, res, next) {
  res.status(201).json({
    message: "Person fectched succesfully!"
  });
});
module.exports = app;