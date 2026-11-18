import { library } from "./library.js";

function resetForm()
{
    const bookForm = document.getElementById("add-book-form");
    bookForm.reset();
}

function submitForm()
{
    const bookFormInputs = document.querySelectorAll("input");
    library.addBook(bookFormInputs[0].value, bookFormInputs[1].value, bookFormInputs[2].value, bookFormInputs[3].checked);
    library.display();
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

    

