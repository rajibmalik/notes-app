class NotesModel {
  constructor() {
    this.notes = [];
  }

  getNotes () {
    return this.notes;
  }

  addNote (note) {
    this.notes.push(note);

  }

  reset () {
    this.notes = [];
  }

  setNotes (notesList) {
    this.notes = notesList;
  }

}


// model = new NotesModel();
// console.log(model);
// model.setNotes("notes")
// console.log(model)



module.exports = NotesModel;



