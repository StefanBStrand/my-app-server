const app = require("./app"); // importing the Express app configured in app.js

const port = 4000; // defining which port the server should listen on.

// starting the server and listening for incoming HTTP requests.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
