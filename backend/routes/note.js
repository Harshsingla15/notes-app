const express = require("express");
const { createNote, getNotes } = require("../controller/noteController.js");

const router = express.Router();

router.post("/note", createNote);
router.get("/note", getNotes);

module.exports = router;
