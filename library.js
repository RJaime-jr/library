let testBut = document.getElementById('test');


let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        let hasRead = "not read yet";
        if (read == true) {
            hasRead = "have read";

        }

        console.log(title + " by " + author + " ,has " + pages + " many pages, " + hasRead);
    }
}



function addBookToLibrary() {
    // do stuff here
}

let animal = new Book("Zoo", "Rico Jaime", 200, true);

console.log(animal.title);

console.log(animal.author);

console.log(animal.pages);
console.log(animal.read);
console.log(animal.info);
//console.log(animal.info);


const createBookCard = (book) => {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p')
    const buttonGroup = document.createElement('div')
    const readBtn = document.createElement('button')
    const removeBtn = document.createElement('button')


    title.textContent = `"${book.title}"`;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`
}

testBut.addEventListener('click', function () {
    createBookCard();
    console.log("butt");
    return;
})