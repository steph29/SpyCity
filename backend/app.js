const express = require("express");
const cors = require("cors");
const config = require("./firebaseConfig");
const bodyparser = require("body-parser");
const agentRoutes = require("./routes/agent-routes");

// App module
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

app.use("/api", agentRoutes.routes);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PUT, OPTIONS"
  );
  next();
});

// ******* PERSON DATA *********
// Create data on agent
app.post("/agent", async (req, res, next) => {
  const person = req.body;
  console.log("Data of person", person);
  await User.add(person);
  res.send({ message: "Person added" });
});

app.get(config.url + "/agent.json", (req, res, next) => {
  res.status(200).json({
    message: "Persons fetched successfully!",
  });
  console.log(res);
});

// ******* MISSION DATA *********
// Create mission
app.post(config.url + "/missions.json", (req, res, next) => {
  res.status(201).json({
    message: "Mission fetched successfully",
  });
  next();
});
// Read data on mission
app.get(config.url + "/missions.json", (req, res, next) => {});

// Updatde data on mission
app.put(config.url + "/missions.json", (req, res, next) => {});

// Delete data on mission
app.delete(config.url + "/missions.json", (req, res, next) => {});
// module.exports = app;

app.listen(config.port, () => console.log("listen on port " + config.port));
