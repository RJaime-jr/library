const addBut = document.getElementById('addBtn');
const bookGrid = document.getElementById('bookDisplay');
const form = document.getElementById('form-data');
const overlay = document.getElementById('overlay');
let bookCardCount = 0;

class Library {
    constructor() {
        this.books = []
    }

    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title)
    }
}

const myLibrary = new Library;

class Book {
    constructor(
        title = 'empty',
        author = 'empty',
        pages = '0',
        isRead = false
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}



function addBookToLibrary(book) {
    myLibrary.books.push(book);
}

function showLibrary() {
    createBookCard(myLibrary.books[bookCardCount]);
    bookCardCount++;


}

//Create Book card
const createBookCard = (book) => {
    //Create elements for bookcard
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const buttonGroup = document.createElement('div')
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    //Assign Classes for bookcard
    bookCard.className = "book";
    buttonGroup.classList.add('card-btn');
    readBtn.classList.add('btn');
    removeBtn.classList.add('btn');

    //Text Content of elements
    title.textContent = `"${book.title}"`;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    removeBtn.textContent = "Remove"

    //Color and text of Read logic
    if (book.isRead) {
        readBtn.textContent = "Read";
        readBtn.classList.add('color-green');
    }
    else {
        readBtn.textContent = "Read";
        readBtn.classList.add('color-red');
    }

    //Button Click events
    readBtn.onclick = toggleRead;
    removeBtn.onclick = removeBook;
    //removeBtn.onclick = updateBooksGrid;

    //Putting all the elements together
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(buttonGroup);
    buttonGroup.appendChild(readBtn);
    buttonGroup.appendChild(removeBtn);
    bookGrid.appendChild(bookCard);
}

//Form open to submit data
function openBookForm() {
    form.classList.add("active");
    overlay.classList.add("active");

    console.log("A");
    console.log(myLibrary.length);
}




function closeOverlay() {
    form.classList.remove("active");
    overlay.classList.remove("active");
    console.log("B");
}


// Button & overlay click that turns off and on the form
addBut.onclick = openBookForm;
overlay.onclick = closeOverlay;



form.addEventListener('submit', cardFromForm);

function cardFromForm(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    let isRead = document.getElementById('isRead').checked;
    let book = new Book(title, author, pages, isRead);
    addBookToLibrary(book);
    showLibrary();
};


const toggleRead = (e) => {
    e.target.classList.toggle('color-green');
    e.target.classList.toggle('color-red');

    console.log(e.target.classList);
}

const removeBook = (e) => {
    const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
        '"',
        ''
    )
    myLibrary.removeBook(title)
    updateBooksGrid()
    console.log(myLibrary);
}

const updateBooksGrid = () => {
    resetBooksGrid()
    for (let book of myLibrary.books) {
        createBookCard(book)
    }
}

const resetBooksGrid = () => {
    bookGrid.innerHTML = ''
}