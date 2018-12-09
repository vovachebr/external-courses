import EventEmitter from "./EventEmitter.js";

export default class BookLibrary {
    constructor() {
        this.onGetBooks = new EventEmitter;
        this.onGetBook = new EventEmitter;
    }

    getBooks(filter) {
        return fetch('/api/books' + filter)
            .then(responce => {
                if (responce.ok) {
                    return responce.json();
                }
                throw new Error('Somethon goes wrong =(');
            })
            .then(data => this.onGetBooks.notify(data.payload));
    }

    getBook(id) {
        return fetch('/api/books/' + id)
            .then(responce => {
                if (responce.ok) {
                    return responce.json();
                }
                throw new Error('Somethon goes wrong =(');
            })
            .then(data => this.onGetBook.notify(data.payload));
    }

    deleteBook(id) {
        return fetch('/api/books/' + id, { method: 'delete' })
            .then(responce => {
                if (responce.ok) {
                    return responce.json();
                }
                throw new Error('Somethon goes wrong =(');
            })
            .then(data => this.onGetBooks.notify(data.payload));
    }

    addBook(book) {
        const sender = book;
        return fetch('/api/books/', {
                method: 'post',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(sender)
            }).then(responce => {
                if (responce.ok) {
                    return responce.json();
                }
                throw new Error('Somethon goes wrong =(');
            })
            .then(data => this.onGetBooks.notify(data.payload));
    }

    updateBook(book) {
        const sender = book;
        return fetch('/api/books/' + book.id, {
            method: 'put',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(sender)
        }).then(responce => {
            if (responce.ok) {
                return responce.json();
            }
            throw new Error('Somethon goes wrong =(');
        }).then(data => this.onGetBooks.notify(data.payload));
    }
}