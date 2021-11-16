const express = require("express");
const cors = require("cors");
const firebase = require("firebase/database");
const bodyParser = require("body-parser");
const Person = require("./model/person");
const mongoose = require("mongoose");

const url =
  "https://spyfield-b2064-default-rtdb.europe-west1.firebasedatabase.app";
const app = express();
mongoose
  .connect(
    "mongodb+srv://fingolfin3529:Ywdt7w2013m@cluster0.jseo0.mongodb.net/spycitydb?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to mongo DB");
  })
  .catch(() => {
    console.log("Connectio failed");
  });

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
  next();
});

// ******* PERSON DATA *********
// Create data on agent
app.post("/agent", (req, res, next) => {
  const person = new Person({
    type: req.body.type,
    name: req.body.name,
    firstname: req.body.firstname,
    callsign: req.body.callsign,
    birthday: req.body.birthday,
    nationalityId: req.body.nationalityId,
    specialityId: req.body.specialityId,
  });
  person.save();
  res.status(201).json({
    message: "Person fetched successfully!",
  });
});

app.get("/agent", (req, res, next) => {
  Person.find().then((documents) => {
    res.status(200).json({
      message: "Persons fetched successfully!",
      person: persons,
    });
  });
});

// ******* MISSION DATA *********
// Create mission
app.post(url + "/missions.json", (req, res, next) => {
  res.status(201).json({
    message: "Mission fetched successfully",
  });
  next();
});
// Read data on mission
app.get(url + "/missions.json", (req, res, next) => {});

// Updatde data on mission
app.put(url + "/missions.json", (req, res, next) => {});

// Delete data on mission
app.delete(url + "/missions.json", (req, res, next) => {});

module.exports = app;
