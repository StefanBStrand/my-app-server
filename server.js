require("dotenv").config;
// dotenv = a lightweight NOde.Js module that loads environment variables from a .env file into process.env

/* The core purpose of dotenv is to separate configuration from code. Developers define sensitive or environment-dependent variables—such as API keys, database URLs, and tokens—within a .env file. When require('dotenv').config() is called, these values are automatically injected into process.env, making them accessible throughout the application without hardcoding secrets. */

const app = require("./app"); // importing the Express app configured in app.js. THis gives fully prepared app (routes, middleware.etc)
// app = the Express application!

const port = process.env.PORT || 4000; // defining which port the server should run/listen on.
// PORT from Render hosting service or local 4000...

// starting the server and listening for incoming HTTP requests. app.listen tells node.js "start listeing for incoming requests"
app.listen(port, () => {
    // Callback function runs once the server is successfully started
    console.log(`Example app listening on port ${port}`);
});

// app.js = builds the app
// server.js = turns it on
