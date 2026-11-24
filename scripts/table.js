import { Book } from "./book.js";
import { library } from "./library.js"

const ID_INDEX = 0;
const START_INDEX = 1;
const CHECKBOX_INDEX = 4;

export function addBook(title, author, pages, read)
{
    const book = library.add(title, author, pages, read);
    
    displayBook(book);
}
export function initializeTable()
{
    addTableEventListener();
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
    checkbox.classList.add("read-checkbox");

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
    button.textContent = "\u2715";
    button.classList.add("remove-button");
    cell.append(button);
    row.append(cell);
}

function addTableEventListener()
{
    const table = document.querySelector("table");

    table.addEventListener("click", processTableEvent);
}

function processTableEvent(event)
{
    const target = event.target;

    if(target.closest(".remove-button"))
    {
        processRemoveEvent(target);
    }
    else if(target.closest(".read-checkbox"))
    {
        processReadEvent(target);
    }
}

function processRemoveEvent(target)
{
    const row = target.closest("tr");
    const id = row.dataset.id;

    library.remove(id);
    row.remove();
}

function processReadEvent(target)
{
    const row = target.closest("tr");
    const id = row.dataset.id;
    const book = library.get(id);

    book.read = !book.read;
}