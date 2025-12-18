const Note = require("../models/Note.js");
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const tags = Array.isArray(req.body.tags) ? req.body.tags : [];
    const userId = req.user;
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content is required",
      });
    }
    const note = await Note.create({
      user: userId,
      title,
      content,
      tags,
    });
    // await note.save();
    res.status(201).json({
      success: true,
      message: "Note is successfully created",
      note,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = createNote;
