const express = require("express");
const register = require("../controller/authController.js");

const router = express.Router();

router.post("/register", register);

module.exports = router;
