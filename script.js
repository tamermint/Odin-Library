//The script will have the logic to add books, remove books, change status of books
//The book grid will first be made dynamic in the .css file

const odinLibrary = []; //variable for the collection of books
const bookGrid = document.querySelector('grid-book');
const book = document.querySelectorAll('book');
const bookCounter = document.querySelector('book-stat');
const changeBtn = document.querySelectorAll('book-stat-btn');
const removeBtn = document.querySelectorAll('book-remove-btn');

//Creating a constructor to add book everytime a function to add a book is called
function Book (name, author, pages, read) {
    this.bookName = name;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.readStatus = read;
}

function addBook (book) {                 //function to add book to the odinLibrary
    odinLibrary.push(book);
    return odinLibrary;
}

function displayBooks(odinLibrary) {        //function to display the odinLibrary
    for (i = 0; i < odinLibrary.length; i++) {
        book.innerHTML = `Name: ${odinLibrary[i].name}`;
        book.innerHTML = '<br />';
        book.innerHTML = `Author: ${odinLibrary[i].author}`;
        book.innerHTML = '<br />';
        book.innerHTML = `Pages: ${odinLibrary[i].pages}`;
        book.innerHTML = '<br />';
        book.innerHTML = `Read: ${odinLibrary[i].read}`;
        book.innerHTML = '<br />';
        book.appendChild(changeBtn);
        book.appendChild(removeBtn);
        bookGrid.appendChild(book);
    }
    return bookGrid;
}

function removeBook(book) {                  //function to remove a book from the library
    const delIndex = odinLibrary.indexOf(book);
    var removedItem = odinLibrary.splice(delIndex, 1);
    return odinLibrary;
}

function statusChange(book) {                //to change the read status of the book in the book library
    changeBtn.forEach(btn => btn.addEventListener('click', function(){
        book.style.backgroundColor = 'green';
    }));
}