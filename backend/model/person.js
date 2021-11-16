const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  firstname: { type: String, required: true },
  birthday: { type: String, required: true },
  callsign: { type: String, required: true },
  nationalityId: { type: Number, required: true },
  specialytiId: { type: [Number], required: true },
});

module.exports = mongoose.model("Person", personSchema);
