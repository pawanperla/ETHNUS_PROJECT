const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.DB_URL;
const db = process.env.DATABASE;
mongoose
  .connect(
    "mongodb+srv://pawan25:test1234@pro-fit.lq3alsa.mongodb.net/?retryWrites=true&w=majority&appName=PRO-FIT"
  )
  .then((res) => console.log("connection is successfull"))
  .catch((err) => console.log(err));
