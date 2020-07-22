// ==============================================================================
// DEPENDENCIES
// ==============================================================================
var path = require("path");
var fs = require("fs");
const { v4: uuidv4 } = require('uuid');
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
//GET /api/notes to read db.json
app.get("/api/notes", function(req, res) {

    fs.readFile("./db/db.json", "utf-8", function(error, data){
      if (error) {
        return console.log(error);
      }
      return res.json(JSON.parse(data));
    });
  
  });
//POST /api/notes add new note to db.json
app.post("/api/notes", function(req, res){
    let note = (req.body)
    let noteID = uuidv4(); 
    note.id = noteID
    let notesArray;
    let savedNotes = fs.readFileSync("./db/db.json","utf-8");
    notesArray = JSON.parse(savedNotes);
    notesArray.push(note);
    
    fs.writeFile("./db/db.json", JSON.stringify(notesArray), function(error){
        if (error) {
        console.log(error);
        }
        console.log(notesArray); 
        return res.json(notesArray); 
    });
})

//DELETE /api/notes/:id from db.json
app.delete("/api/notes/:id", function (req, res){
    let savedNoteArray = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let deletedNoteID = req.params.id;
    console.log("Deleted note ${deletedNoteID}");
    savedNoteArray = savedNoteArray.filter(note => {
        return note.id !== deletedNoteID;
    })

    fs.writeFileSync("./db/db.json", JSON.stringify(savedNoteArray));
    res.json(savedNoteArray);
})
};