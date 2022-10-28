//  //Test 
//  it('adds a new note and loads all notes', (done) => {
//   const client = new NotesClient();

//   fetch.mockResponseOnce(JSON.stringify({
//     content: "This is a note"
//   }));
  
//   let newNoteFromAPI = 'This is a note'
//   client.createNote(newNoteFromAPI, (returnedDataFromApi) => {
//     expect(returnedDataFromApi).toEqual({
//       content: "This is a note"
//     });

//     done();
//   })
// });

// //Client Class 
// createNote(newNoteFromAPI, cb, displayError) {
//   const content = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ content: newNoteFromAPI })
//   }
//   fetch(this.#URL, content)
//     .then(response => response.json())
//     .then(data => {
//       console.log("Success:",data)
//       cb(data)
//     })
//     .catch(error => {
//       console.log(error)
//       displayError(error)
//   });
// }