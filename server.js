const app = require("./app"); // importing the Express app configured in app.js. THis gives fully prepared app (routes, middleware.etc)
// app = the Express application!

const port = 4000; // defining which port the server should run/listen on.

// starting the server and listening for incoming HTTP requests. app.listen tells node.js "start listeing for incoming requests"
app.listen(port, () => {
    // Callback function runs once the server is successfully started
    console.log(`Example app listening on port ${port}`);
});

// app.js = builds the app
// server.js = turns it on
