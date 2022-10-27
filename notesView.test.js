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
    const model = new NotesModel();
    const view = new NotesView(model);
  
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

  it("", () => {
    // class instantiation

    // mock response data of NotesClient

    const mockClient = {
      loadNotes: (fn) => {
        fn(["Test data"])
      }
    }

    const model = new NotesModel();
    const view = new NotesView(model, mockClient);
   
    // setting notes from mock data 
    //client.loadNotes();

    view.displayNotesFromApi();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual("Test data");

    
    


   
   
 

  })

 });


 const candyDouble = {
  getPrice: () => 4.99,
  getName: () => "mars"};




//  // 1. Instantiate the class
//  const notesClient = new NotesClient();

//  // 2. We mock the response from `fetch`
//  // The mocked result will depend on what your API
//  // normally returns — you want your mocked response
//  // to "look like" as the real response as closely as
//  // possible (it should have the same fields).
//  fetch.mockResponseOnce(JSON.stringify({
//    textContent: "test note",
//    className: 'note'
//  }));

//  // 3. We call the method, giving a callback function.
//  // When the HTTP response is received, the callback will be called.
//  // We then use `expect` to assert the data from the server contain
//  // what it should.
//  notesClient.loadNotes((returnedDataFromApi) => {
//    expect(returnedDataFromApi.textContent).toBe("test note");
//    expect(returnedDataFromApi.className).toBe('note');

//    // 4. Tell Jest our test can now end.
//    done();