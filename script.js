document.addEventListener("DOMContentLoaded", function() {
//The script will have the logic to add books, remove books, change status of books
//The book grid will first be made dynamic in the .css file

const odinLibrary = []; //variable for the collection of books
const bookGrid = document.querySelector('#grid-book');
const book = document.querySelectorAll('.book');
const bookCounter = document.querySelector('.book-stat');


//Creating a constructor to create a book everytime a function to add a book is called
function Book (name, author, pages, read) {
    this.bookName = name;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.readStatus = read;
}

function modalLogic() {
    const modal = document.getElementById('bookModal');
    const btn = document.querySelector('#new-btn');
    const span = document.querySelector('.close');

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if(event.target == modal) {
           modal.style.display = "none";
        }
    }
    document.getElementById('bookForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const read = document.getElementById('read').value;
        const newBook = new Book(name, author, pages, read);
        addBook(newBook);
        displayBooks(odinLibrary);
        modal.style.display = "none";
    })
}

function addBook (book) {                 //function to add book to the odinLibrary
    odinLibrary.push(book);
    return odinLibrary;
}

function displayBooks(odinLibrary) {        //function to display the odinLibrary
    bookGrid.innerHTML = '';   //clear the grid first
    for (i = 0; i < odinLibrary.length; i++) {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
                Name: ${odinLibrary[i].bookName}<br>
                Author: ${odinLibrary[i].bookAuthor}<br>
                Pages: ${odinLibrary[i].bookPages}<br>
                Read: ${odinLibrary[i].readStatus}<br>
                `;
        const changeButton = document.createElement('button'); 
        changeButton.classList.add('book-stat-btn');
        changeButton.textContent = 'Change Status';
        const removeButton = document.createElement('button');
        removeButton.classList.add('book-remove-btn');
        removeButton.textContent = 'Remove book';   
        bookDiv.appendChild(changeButton);
        bookDiv.appendChild(removeButton);
        bookGrid.appendChild(bookDiv);
    }
    return bookGrid;
}

function removeBook(book) {                  //function to remove a book from the library
    const delIndex = odinLibrary.indexOf(book);
    if (delIndex !== -1) {
        odinLibrary.splice(delIndex, 1);
    } else {
        window.alert("Book doesn't exist!");
    }
}

function windowButtonEventListeners() {
    bookGrid.addEventListener('click', function(e){
        if(e.target.classList.contains('book-remove-btn')) {
            const bookDiv = e.target.parentElement;
            const name = bookDiv.childNodes[1].nodeValue.split(": ")[1];
            const bookToRemove = odinLibrary.find(book => book.bookName === name);
            removeBook(bookToRemove);
            bookDiv.remove();
        }
        else if(e.target.classList.contains('book-stat-btn')) {
            const bookDiv = e.target.parentElement;
            const name = bookDiv.childNodes[1].nodeValue.split(": ")[1];
            const bookToChange = odinLibrary.find(book => book.bookName === name);
            bookToChange.readStatus = bookToChange.readStatus === 'Yes' ? 'No' : 'Yes';
            bookDiv.childNodes[7].nodeValue = `Read: ${bookToChange.readStatus}`;
        }
    })
}
modalLogic();
displayBooks(odinLibrary);
windowButtonEventListeners();
});


