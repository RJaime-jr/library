const addBut = document.getElementById('addBtn');
const bookGrid = document.getElementById('bookDisplay');
const form = document.getElementById('form-data');
const overlay = document.getElementById('overlay');
let bookCardCount = 0;



let animal = new Book("Zoo", "Rico Jaime", 200, true);


let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



function addBookToLibrary(book) {
    myLibrary.push(book);
}

function showLibrary() {
    createBookCard(myLibrary[bookCardCount]);
    bookCardCount++;


}


const createBookCard = (book) => {
    const bookCard = document.createElement('div');
    bookCard.className = "book";
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p')
    const buttonGroup = document.createElement('div')
    const readBtn = document.createElement('button')
    const removeBtn = document.createElement('button')


    title.textContent = `"${book.title}"`;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;


    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    bookGrid.appendChild(bookCard);

}


function openBookForm() {
    form.classList.add("active");
    overlay.classList.add("active");

    console.log("A");
    /*
    addBookToLibrary();
    showLibrary();
    */
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

    const myFormData = new FormData(event.target);

    const formDataObj = Object.fromEntries(myFormData.entries());
    //let book = new Book(formDataObj);

    addBookToLibrary(formDataObj);
    showLibrary();

    console.log(formDataObj);
};

