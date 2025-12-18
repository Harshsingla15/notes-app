const express = require("express");
const createNote = require("../controller/noteController.js");

const router = express.Router();

router.post("/note", createNote);

module.exports = router;
