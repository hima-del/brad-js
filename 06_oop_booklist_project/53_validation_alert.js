//book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
//ui constructor
function UI() {}
//add book to list
UI.prototype.addBookToList = function(book) {
        const list = document.getElementById('book-list');
        //crete tr element
        const row = document.createElement('tr');
        //insert cols
        row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.title}</td>
    <td>${book.title}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
        list.appendChild(row);
    }
    //show alert
UI.prototype.showAlert = function(message, className) {
    //create div
    const div = document.createElement('div');
    //add class
    div.className = `alert ${className}`;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector('.container');
    //get form
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div, form);
    //timeout after 3sec
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
}

//clear fields
UI.prototype.clearFields = function() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
    //event listeners
document.getElementById('book-form').addEventListener('submit', function(e) {
    //get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
    //console.log(title, author, isbn);
    const book = new Book(title, author, isbn);
    // console.log(book);
    //instantiate ui
    const ui = new UI();
    //validate
    if (title === '' || author === '' || isbn === '') {
        //error alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {


        //add book to list
        ui.addBookToList(book);
        //shoe success
        ui.showAlert('Book Added!', 'success');
        //clear fields
        ui.clearFields();
    }
    e.preventDefault();
});