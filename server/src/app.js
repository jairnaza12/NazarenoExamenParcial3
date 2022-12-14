const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.set("port", process.env.PORT || 3678);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/employees", require("./routes/employee.routes"));

module.exports = app;
