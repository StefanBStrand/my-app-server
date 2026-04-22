/// import data layer (fake database)
const usersStore = require("../data/usersStore"); // import data layer - fake DB right now.
// service talks to data layer, NOT directly to Express..

// Define service function (business logic), not tied to any HTTP, no req/res here
async function registerUser(email, password) {
    // input validation, simple way. Both fields required.
    if (!email || !password) {
        return {
            ok: false,
            status: 400,
            message: "Email and password required",
        };
    }

    // aCall data layer to store user - no DB here right now, just in-memory array.
    //( this will soon be await pool.query... )
    usersStore.addUser({ email, password });

    //return success result. Service returns plain JS object. IMPORTANT - service returns this, but controller decides: status code, JSON response..
    return {
        ok: true,
        status: 200,
        data: { email },
    };
}

// Export service function.
module.exports = { registerUser };
