var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
var employee = mongoose.Schema(
  {
    first_name: {
      en: String,
      th: String,
    },
    last_name: {
      en: String,
      th: String,
    },
    detail: {
      en: String,
      th: String,
    },
    profile_url: String,
    position: [ObjectId],
  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "employee",
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "Datas"
var Data = mongoose.model("employee", employee);
module.exports = Data;
