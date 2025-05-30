const mongoose = require("mongoose");

const visitCounterSchema = new mongoose.Schema({
  total_visits: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("VisitCounter", visitCounterSchema);
