const express = require("express");
const { addAgent } = require("../controller/agentController");

const router = express.Router();

router.post("/agent", addAgent);

module.exports = {
  routes: router,
};
