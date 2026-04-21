// Define GET controller - this also is a route handler function, just like register in authController.register..
function getHealth(req, res) {
    // Send simple response
    res.json("Hello World");
}

// define POst Controller (route handler function)
function postEcho(req, res) {
    // send back whatever cliend send..hence echo..
    res.json({ received: req.body });
}

// export both controller functions
module.exports = { getHealth, postEcho };

// controllers - bridge between HTTP and logic.
// Route -> decides which controller.
// controller handles request/response
// service does logic.
