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


class NotesClient {

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
      //alert(error)
      displayError(error);
    });
    
  }






}







// createNote(note, displayError) {
//   const requestOptions = {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json',},
//     body: JSON.stringify({content: note,}),
//   };
//   fetch('http://localhost:3000/notes', requestOptions)
//   .then((response) => response.json())
//   .then((data) => {
//   console.log("New note added:", data)
//   })
//   .catch(error => {
//     console.log("Post error");
//     // alert(error)
//     displayError(error);
//   });
// }
