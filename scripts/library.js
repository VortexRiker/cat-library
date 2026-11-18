import {Book} from "./book.js"

const ID_INDEX = 0;
const START_INDEX = 1;
const CHECKBOX_INDEX = 4;

function Library()
{
    if(!new.target)
    {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.books = [];
}
Library.prototype.getBook = function(id)
{
    const book = this.book.find(book => book.id === id);

    return book;
}
Library.prototype.addBook = function(title, author, pages, read)
{
    const book = new Book(title, author, pages, read);
    this.books.push(book);
}

Library.prototype.display = function()
{
    clearTable();
    for (const book of this.books)
    {
        displayBook(book);
    }
}

function displayBook(book)
{
    const row = addNewRow();
    addProperties(book, row);
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

    for (let i = START_INDEX; i < propertiesNumber; ++i)
    {
        addProperty(book, i, row);
    }
}
function addProperty(book, index, row)
{
    const cell = document.createElement("td");
    const property = Object.values(book)[index];

    if (index === CHECKBOX_INDEX)
    {
        addCheckboxProperty(property, book, cell);
    }
    else
    {
        addTextProperty(property, cell);
    }
    row.append(cell);
}

function addCheckboxProperty(property, book, cell)
{
    const checkbox = createCheckbox(property, book);

    cell.append(checkbox);
}
function createCheckbox(property, book)
{
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.checked = property;
    addCheckboxListener(checkbox, book);

    return checkbox;
}
function addCheckboxListener(checkbox, book)
{
    checkbox.addEventListener("click", () =>
    {
        let checkboxProperty = Object.values(book)[CHECKBOX_INDEX];
        checkboxProperty = !checkboxProperty;
    });
}

function addTextProperty(property, cell)
{
    cell.textContent = property;
}

function clearTable()
{
    const tableBody = document.querySelector(".table-body-area");
    tableBody.replaceChildren();
}

export const library = new Library(); 

