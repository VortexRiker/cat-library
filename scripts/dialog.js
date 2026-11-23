import { addBook } from "./table.js";

function resetForm()
{
    const bookForm = document.getElementById("add-book-form");
    bookForm.reset();
}

function submitForm()
{
    const bookFormInputs = document.querySelectorAll(".form-input");
    addBook(bookFormInputs[0].value, bookFormInputs[1].value, bookFormInputs[2].value, bookFormInputs[3].checked);
    resetForm();
};

function addFormSubmitListener()
{
    const bookForm = document.getElementById("add-book-form");
    bookForm.addEventListener("submit", submitForm); 
}

function addFormClearListener()
{
    const bookFormClear = document.getElementById("form-controls-clear");
    bookFormClear.addEventListener("click", () => resetForm());
}

export function initializeAddBookDialog()
{
    addFormSubmitListener();
    addFormClearListener();
}

    

