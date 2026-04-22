// Import business logic from service layer - controller should NOT contain logic itself.
const { registerUser } = require("../services/authService");

// EXpress = a helpful organizer that handles web requests and responses. Routes requests to the right funciton and helps you send back
// responses. Express is. a web framework.

// define controller function - this function handles incoming HTTP request -  function register = route handler..
// making function async - bc we will await service call!
async function register(req, res) {
    // extract data from request body (through object destructuring) (sent from client!). reg.body comes from express.json() middleware
    // destructuring isntead of: const email = req.body.email; and const password = req.body.password.
    const { email, password } = req.body; // req.body is populated by the express.json middleware. middleware parses data - puts into req.body.

    // Call service layer (business logic). await service (for future DB Call PG)
    const result = await registerUser(email, password);
    // error case handling
    if (!result.ok) {
        return res.status(result.status).json({
            // object with status and message and ok returned from service layer. Look at authService.js..
            ok: false,
            error: { message: result.message },
        });
    }
    // Handle success case
    return res.json({
        ok: true,
        data: result.data,
    });
}

// export controller function so routes can use it.
module.exports = { register };

// in express every route handler function is always given 2 paramteres, req a variable name (a variable for
// the request object express creates. and res Response, the response object created with what i send back).
// req (request) -> everything the client sends
// res (response) -> what I send back

// ASync operations: HTTP requests (fetch, API Calls)
// database queries (pg, prisma)
// file system (readFIle)
// basically all operations involving waiting for external resources, like network, db, or files.
