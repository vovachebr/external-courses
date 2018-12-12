import EventEmitter from "./EventEmitter.js";

export default class BookLibrary {
    constructor() {
        this.onGetBooks = new EventEmitter;
        this.onGetBook = new EventEmitter;
        this.onFilterBook = new EventEmitter;
    }

    getAllBooks() {
        return fetch('/api/books')
            .then(responseCallback)
            .then(data => this.onGetBooks.notify(data.payload));
    }

    filterBooks(filter) {
        filter = filter ? "?filter=" + filter : "";
        return fetch('/api/books' + filter)
            .then(responseCallback)
            .then(data => this.onFilterBook.notify(data.payload));
    }

    matchBooks(filter) {
        let that = this;
        if (this.timer)
            clearTimeout(this.timer);

        this.timer = setTimeout(function() {
            filter = filter ? "?match=" + filter : "";
            return fetch('/api/books' + filter)
                .then(responseCallback)
                .then(data => that.onFilterBook.notify(data.payload));
        }, 500);
    }

    getBook(id) {
        return fetch('/api/books/' + id)
            .then(responseCallback)
            .then(data => this.onGetBook.notify(data.payload));
    }

    deleteBook(id) {
        return fetch('/api/books/' + id, { method: 'delete' })
            .then(responseCallback)
            .then(data => this.onGetBooks.notify(data.payload));
    }

    addBook(book) {
        return fetch('/api/books/', {
                method: 'post',
                body: book
            }).then(responseCallback)
            .then(data => this.onGetBooks.notify(data.payload));
    }

    updateBook(book) {
        return fetch('/api/books/' + book.id, {
            method: 'put',
            body: book
        }).then(responseCallback).then(data => this.onGetBooks.notify(data.payload));
    }
}

function responseCallback(responce) {
    if (responce.ok) {
        return responce.json();
    }
    throw new Error('Somethon goes wrong =(');
}