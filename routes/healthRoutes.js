const express = require("express");

const { getHealth, postEcho } = require("../controllers/healthController");

const router = express.Router();

router.get("/health", getHealth);

router.post("/echo", postEcho);

module.exports = router;
