const NotesModel = require('./notesModel');
const notepad = new NotesModel;
notepad.addNote("Hello, world");
console.log(notepad.getNotes());