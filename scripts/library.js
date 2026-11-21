import {Book} from "./book.js"

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
    const book = this.books.find(book => book.id === id);

    return book;
}
Library.prototype.removeBook = function(id)
{
    const bookIndex = getLibraryIndex(this, id);

    this.books.splice(bookIndex, 1);
}
Library.prototype.addWithCopy = function(book)
{
    this.books.push(book);
}
Library.prototype.addWithParameters = function(title, author, pages, read)
{
    const book = new Book(title, author, pages, read);

    this.addBook(book);
}

function getLibraryIndex(library, id)
{
    const book = library.getBook(id);

    return library.books.indexOf(book);
}

export const library = new Library(); 

