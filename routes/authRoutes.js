const express = require("express");

//import controller function
const { register } = require("../controllers/authController");

const router = express.Router();

//define route
router.post("/auth/register", register);

module.exports = router;
