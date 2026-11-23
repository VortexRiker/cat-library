import { initializeAddBookDialog } from "./dialog.js";
import { initializeTable, addBook } from "./table.js";

initializeAddBookDialog();
initializeTable();
addBook("How to scratch balls", "Boris Golden", 666, true);
addBook("How to be fast", "Fefus", 67, true);
addBook("How to groom your fur", "Lady Gray", 2002, true);
addBook("How to eat poop", "Roof", 1, false);

