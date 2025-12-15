const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/notes-app`);
    console.log("MongoDB connected Successfully");
  } catch (err) {
    console.log("MongoDB connection Failed!", err);
  }
};

module.exports = connectDB;
