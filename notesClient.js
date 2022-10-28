
class NotesClient {
  loadNotes (fn, displayError) {
  fetch("http://localhost:3000/notes")
  .then((response) => response.json())
  .then ((data) => {
    console.log("Success:", data)
    fn((data))
  })
  .catch(error => {
    console.log("Fetch error");
    // console.log(error)
    // alert(error)
    displayError(error);
  });
}

  createNote(note, displayError) {
    fetch('http://localhost:3000/notes', {
      method: "POST",
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({content: note,}),
    })
    .then(response => response.json())
    .then(data => {
      console.log("New note added:", data)
    })
    .catch(error => {
      console.log("Post error");
      console.log(error)
      //alert(error)
      displayError(error);
    });
  }
  

}




// createNote(note) {
//   const requestOptions = {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json',},
//     body: JSON.stringify({content: note,}),
//   };
//   fetch('http://localhost:3000/notes', requestOptions)
//   .then((response) => response.json()
//   .then((data) => {
//   console.log("New note added:", data)
//   })
//  );
// }












// loadNotes (fn, fnError ) {
//   fetch("http://localhost:3000/notes")
//   .then((response) => response.json())
//   .then ((data) => {
//     fn((data))
//   });
// }



// sendOrder (orderDetails, callback) {
//   fetch("http://localhost:3000/order", { 
//         method: "POST",
//         body: JSON.stringify(orderDetails)
//       })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//       callback()
//     })
// }

// createNote (noteDetails) {
//   fetch("http://localhost:3000/notes", {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({content: noteDetails}).then((response) => 
//     response.json())
//   });
// }


module.exports = NotesClient


