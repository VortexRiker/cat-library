import {Book} from "./book.js"

function Library()
{
    if(!new.target)
    {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.books = [];
}
Library.prototype.add = function(title, author, pages, read)
{
    const book = new Book(title, author, pages, read);

    this.books.push(book);

    return book;
}
Library.prototype.remove = function(id)
{
    const bookIndex = getLibraryIndex(this, id);

    this.books.splice(bookIndex, 1);
}
Library.prototype.get = function(id)
{
    const book = this.books.find(book => book.id === id);

    return book;
}


function getLibraryIndex(library, id)
{
    const book = library.get(id);

    return library.books.indexOf(book);
}

export const library = new Library(); 

