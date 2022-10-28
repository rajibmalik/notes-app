/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 
 const NotesModel = require('./notesModel');
 const NotesView = require('./notesView');
 const NotesClient = require('./notesClient')
 
 describe('NotesView', () => {
   beforeEach(() => {
     document.body.innerHTML = fs.readFileSync('./index.html');
   });

   it('displays two notes', () => {
    // 1. Setting up model and view
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('A first note');
    model.addNote('Another one');

    // 2. Display the notes on the page
    view.displayNotes();
    view.displayNotes();

    // 3. There should now be 2 div.note on the page
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it('adds a new note to the webpage', () => {
    const mockClient = {
      createNote: () => {
        ([])
      }
    }

    const model = new NotesModel();
    const view = new NotesView(model, mockClient);
  
    // Input 
    const input = document.querySelector('#add-note-input');
    input.value = "Test note";

    // Clicking button
    const button = document.querySelector("#add-note-btn");
    button.click();

    // Note visible on page
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('Test note');
  });

  it ("there are the correct number of notes", () => {
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('Note one')
    model.addNote('Note two')

    view.displayNotes();
    view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toEqual(2);
    
  });

  it("notesView class", () => {
    // class instantiation

    // mock response data of NotesClient

    const mockClient = {
      loadNotes: (fn) => {
        fn(["Test data fetch"])
      }
    }

    const model = new NotesModel();
    const view = new NotesView(model, mockClient);
   
    // setting notes from mock data 
    //client.loadNotes();

    view.displayNotesFromApi();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual("Test data fetch");
  });

  it("NotesClient createNote method", () => {
    const model = new NotesModel();
    const mockClient = {
      createNote: (note) => {
        note("Test data post")
      }
    }
    
    const view = new NotesView(model, mockClient);

    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual("Test data post")
  })

  it("Creates an error message" , () => {
    const model = new NotesModel();

    const mockClient = {
      createNote: (note) => {
        note("Test data post")
      }
    }

    const view = new NotesView(model, mockClient)

    view.displayError();

    expect(document.querySelectorAll("p.error").length).toBe(1)
    expect(document.querySelectorAll("p.error")[0].textContent).toEqual("Oops, something went wrong!")
  })

 });





