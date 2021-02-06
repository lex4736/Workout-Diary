const express = require("express")
const mongoose = require("mongoose")
const logger = require("morgan")
const PORT = process.env.PORT || 3000;

const app = express();




app.listen(PORT, () => {
    console.log(`app running on port https://localhost:${PORT}`)
});
