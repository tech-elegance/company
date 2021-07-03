var mongoose = require("mongoose");

var plan = mongoose.Schema(
  {
    title: String,
  },
  {
    collection: "plan",
  }
);
var data = mongoose.model("plan", plan);
module.exports = data;
