const express = require("express");
const {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
} = require("../controller/noteController.js");

const router = express.Router();

router.post("/note", createNote);
router.get("/note", getNotes);
router.put("/note/:id", updateNote);
router.delete("/note/:id", deleteNote);

module.exports = router;
