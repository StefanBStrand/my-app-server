function getHealth(req, res) {
    res.json("Hello World");
}

function postEcho(req, res) {
    res.json({ received: req.body });
}

module.exports = { getHealth, postEcho };
