const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      // The next three lines are required to avoid a warning message on the console
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("MongoDB Connected");
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
