// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var fs = require("fs");
var path = require("path");
const { v4: uuidv4 } = require('uuid');
// const app = express();
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json(db));
app.use(express.static('public'));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================


require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// app.GET("api/notes", function(req,res){
//   var readSavedNote = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
//   var newNote = req.body;
//   var uniqueId = (newNote.length).toString();
//   newNote.id = uniqueId;
//   savedNotes.push(newNote);

//   fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
//   console.log("Your file is being written. Content: ", newNote);
//   res.JSON(readSavedNote);

// })

// // Deletes any selected note, filters over saved notes and reassigns new IDs to all strings.
// app.delete("/api/notes/:id", function(req, res) {
//   let readSavedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
//   let noteID = req.params.id;
//   let newID = 0;
//   console.log(`Deleting note with ID ${noteID}`);
//   readSavedNotes = readSavedNotes.filter(currNote => {
//       return currNote.id != noteID;
//   })
//   for (currNote of readSavedNotes) {
//     currNote.id = newID.toString();
//     newID++;
// }
// for (currNote of readSavedsavedNotes) {
//   currNote.id = newID.toString();
//   newID++;
// }

// fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
// res.json(savedNotes);
// })

// app.post("/api/notes" function(req,res){
//  var newNOTE = req.body
//  console.log(newNote)
//  notes.push(newNote)
//  res.json(newNote)
// });

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
