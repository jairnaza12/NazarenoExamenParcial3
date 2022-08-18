const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/examen_3ro";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then((db) => console.log("db is connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;
