const express = require("express")
const mongoose = require("mongoose")
const logger = require("morgan")
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, () => {
    console.log(`app running on port https://localhost:${PORT}`)
});
