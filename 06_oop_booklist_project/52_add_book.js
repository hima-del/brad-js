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
    ui.addBookToList(book);
    //clear fields
    ui.clearFields();
    e.preventDefault();
});