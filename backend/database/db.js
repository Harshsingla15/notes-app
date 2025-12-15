const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/notes-app`);
    console.log("MongoDB connected Successfully");
  } catch (err) {
    console.error("MongoDB connection Failed!", err);
    process.exit(1);
  }
};

module.exports = connectDB;
