const express = require("express"); // require = import (OLD js) - Importing express framework, works on top of Node.js.

// Creating an express app instance - the main application object.
const app = express();

// importing CORS middleware (allows requests from other origins, e.g. the front end that runs on port 3000)
const cors = require("cors");

// import route modules - these contain grouped endpoints (routes)
const healthRoutes = require("./routes/healthRoutes");
const authRoutes = require("./routes/authRoutes"); // this import does NOT give me the file, it gives whatever the file EXPORTED! so
// authRoutes === router. Soo. se line 21. authRoutes, just variable name..

// Middleware: parse incoming JSON Requests - without this - req.body would be undefined
app.use(express.json());
// Middleware: enable CORS (cross origin resource sharing)
app.use(cors());

// Mount /plug in routes and routers into the main app - all routes inside these files become active. app.use adds middleware OR routes.
app.use(healthRoutes);
app.use(authRoutes); // this line is actually app.use(router); authRoutes is just a variable name.

//export the configured app - server.js will import this and start it.
module.exports = app;
// module.exports - old lingo. export default app = new lingo.

// this file : build the backend: add middleware, plug in routes, export ready app. Then server.js starts it.

// flow is: creater router in file (e.g authRoutes), add routes to it, export it, import it in app.js, use with app.use(...)
// router = small route collection
