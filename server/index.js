const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 8000;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.options("*", cors());

app.post("/form", (req, res) => {
    //TODO: data sanitization and validation & store in database
    console.log(req.body);
    res.status(201).send("created");
});

app.listen(port, () => {
    console.log(`Port listening at http://localhost:${port}`);
});
