const express = require("express"); // import Express

// import controller functions from healthController.js
const { getHealth, postEcho } = require("../controllers/healthController");

// create router - mini routing module for health routes - keeps file separated. Each router groups related routes.
const router = express.Router();

// defined GET route . GET /health -> calls getHealth()
router.get("/health", getHealth);

// Define POST route - POST /echo - calls postEcho()
router.post("/echo", postEcho);

// export router so can be used in app.js.
module.exports = router;

// /health = path
// localhost:4000 = server
// GET = method
// ALL these togehter = endpoint
