class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');

    document.querySelector('#add-note-btn').addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);

    })
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
    document.querySelector('#add-note-input').value = "";
    this.client.createNote(newNote);
  }

  displayNotes() {
    document.querySelectorAll('div.note').forEach(note => {
      note.remove();
    });

    const notes = this.model.getNotes()

    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    });
  }

  displayNotesFromApi() {
      this.client.loadNotes(notes => {
      console.log(notes);
      this.model.setNotes(notes);
      this.displayNotes();
    });
  }

  displayError() {
    const errorMessage = document.createElement('p')
    errorMessage.textContent = "Oops, something went wrong!";
    errorMessage.className = "error";
    this.mainContainerEl.append(errorMessage);
  }
}

module.exports = NotesView;


