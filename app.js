const express = require("express");

const app = express();
// const port = 4000;
const cors = require("cors");
const healthRoutes = require("./routes/healthRoutes");
const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use(cors());

app.use(healthRoutes);
app.use(authRoutes);

module.exports = app;
