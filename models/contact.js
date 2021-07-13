var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var contact = mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now },
    plan: ObjectId,
  },
  {
    collection: "contact",
  }
);

var data = mongoose.model("contact", contact);
module.exports = data;
