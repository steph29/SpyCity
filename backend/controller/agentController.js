"use strict";

const firebase = require("../db");
const agent = require("../agent");

const firestore = firebase.firestore;

const addAgent = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection("agents").doc().set(data);
    res.send("Record save successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addAgent,
};
