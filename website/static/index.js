fucntion deleteNote(noteId) { // noteId is passed in from the HTML
    fetch('/delete-note', { // fetch is a built in function in JS
        method: 'POST', // POST is a method of sending data to the server
        body: JSON.stringify({ noteId: noteId }) // JSON.stringify converts the data into a string
    }).then((_res) => { // _res is the response from the server
        window.location.href = '/'; // redirect to the home page
    });
}