const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema(
  {
    name: { type: String, required: false },
    azucar: { type: Number, required: false },
    grasa: { type: Number, required: false },
    oxigeno: { type: Number, required: false },
    riesgo: {type: String, required: false},
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("Employee", employeeSchema);
