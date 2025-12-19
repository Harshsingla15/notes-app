const express = require("express");
const {
  createNote,
  getNotes,
  updateNote,
} = require("../controller/noteController.js");

const router = express.Router();

router.post("/note", createNote);
router.get("/note", getNotes);
router.put("/note/:id", updateNote);

module.exports = router;
