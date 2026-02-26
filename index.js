const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/health", (req, res) => {
    res.json("Hello World!");
});

app.post("/ehco", (req, res) => {
    res.json({ received: req.body });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
