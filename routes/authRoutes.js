const express = require("express"); // import Express - needed to create a router

//import controller function - the function that will handle the request
const { register } = require("../controllers/authController");

const router = express.Router(); // Create a router instance - router = a "mini app" for grouping routes

//define a POST route - when a reqeust hits POST /auth/register -> call register
router.post("/auth/register", register);

module.exports = router; // Export the router so app.js can use it. Exporting the router, NOT the file..

// Key concept!: a route is: router.METHOD("path", handlerFunction)
//routes = traffic controller - if this URL + method -> go to this function.
// routes define endpoints - endpoints are the URLs you call.
