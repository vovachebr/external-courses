import BookLibraryView from "./BooksLibraryView.js";
import BookLibrary from "./BookLibrary.js";

export default class BookLibraryController {
    constructor() {
        this.model = new BookLibrary;
        this.view = new BookLibraryView(this.model, this);
    }

    start() {
        this.view.init();
        this.model.getAllBooks();
    }

    getAllBooks() {
        this.model.getAllBooks();
    }

    filterBooks(filter) {
        this.model.filterBooks(filter);
    }

    getBookById(id) {
        this.model.getBook(id);
    }

    deleteBook(id) {
        this.model.deleteBook(id);
    }

    addBook(book) {
        this.model.addBook(book);
    }

    updateBook(book) {
        this.model.updateBook(book);
    }

    matchBooks(filter) {
        this.model.matchBooks(filter);
    }
}