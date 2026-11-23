export function Book(title, author, pages, read)
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