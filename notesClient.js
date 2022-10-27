class NotesClient {
  loadNotes (fn) {
    fetch("http://localhost:3000/notes")
    .then((response) => response.json())
    .then ((data) => {
      fn((data))
    });
  }
}

module.exports = NotesClient

// class GithubClient {
//   getRepoInfo(repoName, callback) {
//     fetch('https://api.github.com/repos/' + repoName)
//       .then(response => response.json())
//       .then(data => {
//         callback(data)
//       });
//   }
// }

