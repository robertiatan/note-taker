// Dependencies
const db = require("../db/db.json");
const fs = require("fs");

// API Routes
module.exports = (app) => {
  // GET route for /api/notes
  app.get("/api/notes", (req, res) => {
    res.json(db);
  });

  // POST route for /api/notes
  app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    newNote.id = db.length + 1;
    db.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    res.json(db);
  });

  // DELETE route for /api/notes/:id
  app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    const index = db.findIndex((note) => note.id === parseInt(id));
    db.splice(index, 1);
    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    res.json(db);
  });
};
