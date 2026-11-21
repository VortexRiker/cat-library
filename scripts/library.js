import {Book} from "./book.js"
import { displayBook, removeBook } from "./table.js";
 
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
Library.prototype.removeBook = function(id)
{
    const bookIndex = getLibraryIndex(id);

    this.books.splice(bookIndex, 1);

}
Library.prototype.addBook = function(title, author, pages, read)
{
    const book = new Book(title, author, pages, read);

    this.books.push(book);
    displayBook(book);
}

function getLibraryIndex(library, id)
{
    const book = library.getBook(id);

    return library.books.indexOf(book);
}

export const library = new Library(); 

