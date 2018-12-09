export default class BookLibraryView {
    constructor(model, controller) {
        this.model = model;
        this.controller = controller;

        this.booksList = document.getElementById("booksList");
        this.radioSwitch = document.querySelectorAll('.filteres input');
        this.inputBox = document.querySelector('#search input');
        this.imgages = document.querySelector('.BookCard img') || [];

    }

    init() {
        var that = this;

        this.model.onGetBooks.subscribe(function(books) {
            that.renderBooks(books);
        });

        this.model.onGetBook.subscribe(function(book) {
            that.renderModalBook(book);
        });

        this.model.onFilterBook.subscribe(function(books) {
            that.renderBooks(books);
        });

        this.radioSwitch.forEach(function(radio) {
            radio.addEventListener("click", function(e) {
                that.controller.filterBooks(e.target.value);
            })
        });

        this.inputBox.addEventListener("input", function(e) {
            that.controller.matchBooks(e.target.value);
        });

        document.querySelector("#modal .close").addEventListener("click", function(e) {
            that.closeModal();
        });

        document.querySelector("#modal .delete").addEventListener("click", function(e) {
            that.closeModal();
            let id = +e.target.parentNode.parentNode.parentNode.getAttribute("data-id");
            that.controller.deleteBook(id);
        });

        document.querySelector("nav .addBook").addEventListener("click", function(e) {
            that.renderModalBook({ id: 0, author: "", created_at: new Date().toISOString(), price: 0, rating: 0, src: "", title: "" });
            document.querySelector("#modal .delete").setAttribute("disabled", "disabled");
            document.querySelector('#modal img').src = "./image/no_image.jpg";
            document.getElementById("modalAvatar").value = "";
        });

        document.querySelector('#modal input[type="file"]').addEventListener("change", function(e) {
            let link = window.URL.createObjectURL(this.files[0]);
            document.querySelector('#modal img').src = link;
        });

        document.querySelector('#modal .submit').addEventListener("click", function(e) {
            let id = +this.parentElement.parentElement.parentElement.getAttribute("data-id");
            let book = that.takeBookData();
            if (id == 0) {
                that.controller.addBook(book);
            } else {
                that.controller.updateBook(book);
            }
            that.closeModal();
        })

        this.subscribeBookDetailEvent();
    }

    takeBookData() {
        let book = {};
        book.title = document.getElementById("modalName").value;
        book.author = document.getElementById("modalAuthor").value;
        book.rating = +document.getElementById("modalRating").value;
        book.created_at = new Date(document.getElementById("modalCreateDate").value).toISOString();;
        book.price = +document.getElementById("modalPrice").value;
        let file = document.getElementById("modalAvatar").files[0];
        if (file)
            book.avatar = window.URL.createObjectURL(file);

        book.id = +document.getElementById("modal").getAttribute("data-id");
        return book;
    }

    subscribeBookDetailEvent() {
        let that = this;
        this.imgages = document.querySelectorAll('.BookCard img') || [];
        this.imgages.forEach(function(avatar) {
            avatar.addEventListener("click", function(e) {
                that.controller.getBookById(+e.target.getAttribute("data-id"));
            })
        });
    }

    renderBooks(books) {
        this.clearDiv();
        for (let i = 0; i < books.length; i++) {
            const book = books[i];

            const bookDiv = document.createElement("div");
            bookDiv.classList.add("BookCard");

            const avatar = document.createElement("img");
            if (book.avatar) {
                avatar.src = book.avatar;
            } else {
                book.src = book.src || "no_image";
                avatar.src = "./image/" + book.src + ".jpg";
            }

            avatar.width = 180;
            avatar.height = 220;
            avatar.setAttribute("data-id", book.id);

            const title = document.createElement("div");
            title.textContent = book.title;
            title.classList.add("title");

            const author = document.createElement("div");
            author.textContent = "by " + book.author;
            author.classList.add("author");

            const rate = this.getRatingStars(book.rating);
            rate.classList.add("starsRating");

            bookDiv.append(avatar);
            bookDiv.append(title);
            bookDiv.append(author);
            bookDiv.append(rate);
            booksList.append(bookDiv);
        }
        this.subscribeBookDetailEvent();
    }

    renderModalBook(book) {
        let modal = document.getElementById("modal");
        modal.setAttribute("data-id", book.id);
        modal.classList.remove("hidden");
        modal.classList.add("showen");
        let avatar = document.querySelector("#modal img");
        if (book.avatar) {
            avatar.src = book.avatar;
        } else {
            book.src = book.src || "no_image";
            avatar.src = "./image/" + book.src + ".jpg";
        }
        let bookName = document.getElementById("modalName");
        bookName.value = book.title;
        let bookAuthor = document.getElementById("modalAuthor");
        bookAuthor.value = book.author;
        let bookRating = document.getElementById("modalRating");
        bookRating.value = book.rating;
        let bookCreated = document.getElementById("modalCreateDate");
        bookCreated.value = book.created_at.substring(0, 10);
        let bookPrice = document.getElementById("modalPrice");
        bookPrice.value = book.price;
        document.querySelector("#modal .delete").removeAttribute("disabled");
    }

    closeModal() {
        let modal = document.getElementById("modal");
        modal.classList.add("hidden");
        modal.classList.remove("showen");
    }

    clearDiv() {
        let list = document.getElementById("booksList");
        list.innerHTML = "";
    }

    getRatingStars(rating) {
        const ratingDiv = document.createElement("div");
        for (let i = 0; i < 5; i++) {
            let star = document.createElement("i");
            if (rating >= 1) {
                star.classList.add("fas", "fa-star");
            } else if (rating >= 0.5) {
                star.classList.add("fas", "fa-star-half-alt");
            } else {
                star.classList.add("far", "fa-star");
            }
            rating--;
            ratingDiv.append(star);
        }
        return ratingDiv;
    }
}