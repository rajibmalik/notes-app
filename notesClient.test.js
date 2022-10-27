const NotesClient = require('./notesClient');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('NotesClient class', () => {
  it('calls fetch and loads data', (done) => {
    // 1. Instantiate the class
    const notesClient = new NotesClient();

    // 2. We mock the response from `fetch`
    // The mocked result will depend on what your API
    // normally returns — you want your mocked response
    // to "look like" as the real response as closely as
    // possible (it should have the same fields).
    fetch.mockResponseOnce(JSON.stringify({
      textContent: "test note",
      className: 'note'
    }));

    // 3. We call the method, giving a callback function.
    // When the HTTP response is received, the callback will be called.
    // We then use `expect` to assert the data from the server contain
    // what it should.
    notesClient.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.textContent).toBe("test note");
      expect(returnedDataFromApi.className).toBe('note');

      // 4. Tell Jest our test can now end.
      done();
    });
  });
});

// example test 


// describe('GithubClient class', () => {
//   it('calls fetch and loads repo info', (done) => {
//     const client = new NotesClient();
//     fetch.mockResponseOnce(JSON.stringify({
//       name: 'rails/rails',
//       description: 'Ruby on Rails'
//     }));

//     client.getRepoInfo(() => {
//       expect(repoInfo.description).toBe('Ruby on Rails');

//       // Refer to
//       // https://github.com/makersacademy/javascript-fundamentals/blob/main/pills/testing_asynchronous_code.md#testing-callbacks
//       // if you're unsure why we are using this done() function.
//       done();
//     });
//   });
// });