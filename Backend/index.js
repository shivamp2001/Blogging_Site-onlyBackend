const express = require("express");
const app = express();
const mongoose = require("mongoose");
const route = require("./src/routes/route");
const cookieparser = require("cookie-parser");
require("dotenv").config()
const DATABASE=process.env.DATABASE
// console.log(DATABASE);
const cors = require("cors");
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(cookieparser());
mongoose
  .connect(
    DATABASE
  )
  .then(() => console.log("Connected to Dtabase"))
  .catch((err) => console.log(err));

app.use("/", route);


app.listen(PORT, () => console.log(`server running on port ${PORT}`));