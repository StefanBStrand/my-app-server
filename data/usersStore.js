const users = [];

function addUser(user) {
    users.push(user);
}

function findByEmail(email) {
    return users.find((u) => u.email === email);
}

//get all users (for debugging)
function getAllUsers() {
    return users;
}

module.exports = { addUser, findByEmail, getAllUsers };
