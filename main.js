require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = 3000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB"));

app.listen(port, () => console.log(`Server started on port http://localhost:${port}`));

/////////////////////////////////////////////

// require('dotenv').config()

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");

// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
// const db = mongoose.connection
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("Connected to Datenbase"));

// app.listen(3000, () => console.log("server started"));
