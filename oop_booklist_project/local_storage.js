class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI {
    addBookToList(book) {
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
    showAlert(message, className) {
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
    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}
//local storage class
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books')) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static displayBooks() {
        const books = Store.getBooks();
        books.forEach(function(book) {
            const ui = new UI;
            //ADD BOOK TO UI
            ui.addBookToList(book);
        });
    }
    static addBook() {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));

    }
    static removeBook(isbn) {
        // console.log(isbn);
        const books = Store.getBooks();
        books.forEach(function(book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
    }
}
//dom load event
document.addEventListener('DOMContentLoaded', Store.displayBooks);
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
        //add book to ls
        Store.addBook(book);
        //shoe success
        ui.showAlert('Book Added!', 'success');
        //clear fields
        ui.clearFields();
    }
    e.preventDefault();
});
//event listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteBook(e.target);
    //remove from ls
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    //show message
    ui.showAlert('Book Removed!', 'success');
    e.preventDefault();
});