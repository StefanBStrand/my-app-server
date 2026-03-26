// import data layer (fake database)
const usersStore = require("../data/usersStore");

// business logic for registering a user
function registerUser(email, password) {
    if (!email || !password) {
        return {
            ok: false,
            status: 400,
            message: "Email and password required",
        };
    }

    // add user to storage (data layer)
    usersStore.addUser({ email, password });

    //return success result
    return {
        ok: true,
        status: 200,
        data: { email },
    };
}

module.exports = { registerUser };
