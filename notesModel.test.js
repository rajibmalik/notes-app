const NotesModel = require('./notesModel');

describe("Notes Model", () => {
  it("Creates an empty instance of NotesModel", () => {
    const notepad = new NotesModel;
    expect(notepad).toEqual( {"notes": []});
  });

  it("Should return the contents of the NotesModel", () => {
    const notepad = new NotesModel;
    expect(notepad.getNotes()).toEqual([]);
  });

  it("Should return two notes from the notepad", () => {
    const notepad = new NotesModel;
    notepad.addNote("Buy milk");
    notepad.addNote("Go to the gym");
    expect(notepad.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });

  it("Should reset the notepad and return an empty notepad", () => {
    const notepad = new NotesModel;
    notepad.addNote("Buy milk");
    notepad.addNote("Go to the gym");
    notepad.reset();
    expect(notepad.getNotes()).toEqual([]);
  })

})















// describe('Counter model', () => {
//   it('starts at 0', () => {
//     const model = new CounterModel();

//     expect(model.getCounter()).toBe(0);
//   });

//   it('increments by 1', () => {
//     const model = new CounterModel();
//     model.increment();

//     expect(model.getCounter()).toBe(1);
//   });
// })