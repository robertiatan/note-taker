// Dependencies
const router = require("express").Router();
const saveData = require("../db/saveData");

// GET route for /api/notes
router.get("/notes", (req, res) => {
  saveData
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

// POST route for /api/notes
router.post("/notes", (req, res) => {
  saveData
    .addNotes(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// DELETE route for /api/notes/:id
router.delete("/notes/:id", (req, res) => {
  saveData
    .removeNotes(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
