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

const getNotes = async (req, res) => {
  try {
    const userId = req.user;
    const notes = await Note.find({ user: userId }).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "All notes returned",
      notes,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Not able to fetch notes",
    });
  }
};

const updateNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    const userId = req.user;
    const note = await Note.findById(noteId);
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "No note exist with the given id",
      });
    }
    if (note.user.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update the note",
      });
    }
    const { title, content, tags } = req.body;
    const updatedFields = {};
    if (title) updatedFields.title = title;
    if (content) updatedFields.content = content;
    if (Array.isArray(tags)) updatedFields.tags = tags;
    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      { $set: updatedFields },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Note is successfully updated",
      note: updatedNote,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { createNote, getNotes, updateNote };
