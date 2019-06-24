const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => {
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
