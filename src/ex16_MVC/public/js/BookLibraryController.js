import BookLibraryView from "./BooksLibraryView.js";
import BookLibrary from "./BookLibrary.js";

export default class BookLibraryController {
    constructor() {
        this.model = new BookLibrary;
        this.view = new BookLibraryView(this.model, this);
    }

    start() {
        this.view.init();
        this.model.getBooks("");
    }

    getBooks(filter) {
        let filterQuery = filter ? "?filter=" + filter : "";
        this.model.getBooks(filterQuery);
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
        let that = this;
        if (this.timer)
            clearTimeout(this.timer);

        this.timer = setTimeout(function() {
            let filterQuery = filter ? "?match=" + filter : "";
            that.model.getBooks(filterQuery);
        }, 500);
    }
}