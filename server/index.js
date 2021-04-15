const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const cors = require("cors");

const port = 8000;

app.use(cors());
app.options("*", cors());

app.post("/form", upload.array("images"), (req, res) => {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any

    console.log(req.body);
    res.status(201).send;

    res.send("ok");
});

app.listen(port, () => {
    console.log(`Port listening at http://localhost:${port}`);
});
