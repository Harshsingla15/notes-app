const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./database/db.js");
const authRoute = require("./routes/auth.js");
const noteRoute = require("./routes/note.js");

const authMiddleware = require("./middleware/authMiddleware.js");

const app = express();
const PORT = process.env.PORT || 4000;

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.get("/api/health", authMiddleware, (req, res) => {
  if (req.user) {
    return res.json(req.user);
  }
  return res.send("HEALTH API");
});

app.use("/api/auth", authRoute);
app.use("/api", authMiddleware, noteRoute);

//start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  } catch (e) {
    console.log("Server start up failed");
    process.exit(1);
  }
};

startServer();
