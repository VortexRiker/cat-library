const books = [];

function Book(title, author, pages, read)
{
    if(!new.target)
    {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function()
{
    return `${this.title} by ${this.author}, ${this.pages} pages, ${read ? "is finished" : "not read yet"}`;
}


function addBookToLibrary(title, author, pages, read)
{
    const book = new Book(title, author, pages, read);
    books.push(book);
}

function addNewRow()
{
    const tableBody = document.querySelector(".table-body-area");
    const row = document.createElement("tr");

    tableBody.append(row);

    return row;
}

function addProperties(book, row)
{
    const propertiesNumber = Object.keys(book).length;
    for (let i = 1; i < propertiesNumber; ++i)
    {
        const property = Object.values(book)[i];
        addProperty(property, row);
    }
}
function addProperty(property, row)
{
    const cell = document.createElement("td");
    cell.textContent = property;
    row.append(cell);
}

function displayBook(book)
{
    const row = addNewRow();
    addProperties(book, row);
}

function clearTable()
{
    const tableBody = document.querySelector(".table-body-area");
    tableBody.replaceChildren();
}


function displayBooks(books)
{
    clearTable();
    for (const book of books)
    {
        displayBook(book);
    }   
}

const bookForm = document.getElementById("add-book-form");
const bookFormClear = document.getElementById("form-control-clear");
const bookFormInputs = document.querySelectorAll("input");

bookForm.addEventListener("submit", () => 
    {
        addBookToLibrary(bookFormInputs[0].value, bookFormInputs[1].value, bookFormInputs[2].value, bookFormInputs[3].checked);
        displayBooks(books);
        bookForm.reset();
    });

bookForm.addEventListener("click", () => bookForm.reset());

addBookToLibrary("Balls Scratching 101", "Boris", 666, false);
addBookToLibrary("Balls Scratching 101", "Boris", 666, false);
addBookToLibrary("Balls Scratching 101", "Boris", 666, false);

displayBooks(books);
