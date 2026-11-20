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
    displayBook(book);
}

function displayBook(book)
{
    const row = addNewRow(book);
    addProperties(book, row);
}
function addNewRow(book)
{
    const tableBody = document.querySelector(".table-body-area");
    const row = document.createElement("tr");

    row.dataset.id = book.id;

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
    addRemoveButton(row);
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

    return checkbox;
}

function addTextProperty(property, cell)
{
    cell.textContent = property;
}

function addRemoveButton(row)
{
    const cell = document.createElement("td");
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = "Remove";
    cell.append(button);
    row.append(cell);
}
export const library = new Library(); 

