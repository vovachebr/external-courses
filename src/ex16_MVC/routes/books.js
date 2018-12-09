const router = require("express").Router();

const books = [
    { id: 1, title: "Гарри Поттер", src: 1, author: 'Джоан Роулинг', rating: 4.5, price: 0, created_at: new Date(2015, 5, 15) },
    { id: 2, title: "Мастер и Маргарита", src: 2, author: 'Михаил Булгаков', rating: 3.5, price: 0, created_at: new Date(2015, 6, 20) },
    { id: 3, title: "Учебник математики", src: 3, author: 'Я', rating: 4, price: 618, created_at: new Date(2015, 2, 17) },
    { id: 4, title: "Путеводитель по России", src: 4, author: 'Крутой путешественник', rating: 5, price: 716, created_at: new Date(2017, 5, 30) },
    { id: 5, title: "Детектив", src: 5, author: 'Дарья Данцова', rating: 4.5, price: 235, created_at: new Date(2018, 3, 20) },
    { id: 6, title: "Руководство по выживанию", src: 6, author: 'Беар Грилз', rating: 5, price: 795, created_at: new Date(2011, 6, 26) },
    { id: 7, title: "Кулинария", src: 7, author: 'Какая-то повариха', rating: 2, price: 0, created_at: new Date(2015, 3, 16) },
    { id: 8, title: "Карта рязанской области", src: 8, author: 'Крутой путешественник', rating: 3, price: 0, created_at: new Date(2018, 9, 5) },
    { id: 9, title: "Обработка изображений", src: 9, author: 'Крутой разрабочик', rating: 5, price: 689, created_at: new Date(2013, 10, 14) },
    { id: 10, title: "Учебник JavaScript", src: 10, author: 'Я', rating: 5, price: 545, created_at: new Date(2018, 4, 17) },
    { id: 11, title: "Война и мир том 1", src: 11, author: 'Лев Толстой', rating: 4.5, price: 465, created_at: new Date(2015, 9, 18) },
    { id: 12, title: "Война и мир том 2", src: 12, author: 'Лев Толстой', rating: 4, price: 0, created_at: new Date(2016, 12, 13) },
    { id: 13, title: "Война и мир том 3", src: 13, author: 'Лев Толстой', rating: 4, price: 476, created_at: new Date(2018, 6, 10) },
];

//all
router.get("/", function(request, response) {
    console.log("from get books");
    const { query, url } = request; //query = request.query
    let resultBooks = books;
    if (query.filter == "most-popular")
        resultBooks = resultBooks.filter(b => b.rating >= 4.5);
    else if (query.filter == "recent") //last 2 years
        resultBooks = resultBooks.filter(b => (new Date().getFullYear() - b.created_at.getFullYear()) <= 2);
    else if (query.filter == "free")
        resultBooks = resultBooks.filter(b => b.price === 0);

    if (query.match)
        resultBooks = resultBooks.filter(b => b.title.toLowerCase().includes(query.match.toLowerCase()));

    response.json({ payload: resultBooks });
})

//one
router.get("/:id", function(request, response) {
    const { id } = request.params;
    response.setHeader('content-type', 'application/json');
    response.json({ payload: books.find(b => b.id == +id) });
})

router.post("/", function(request, response) {
    const { title, author, rating, price, created_at, avatar } = request.body;
    console.log(created_at);
    const book = { id: books.length + 1, title, rating, price, author, created_at, avatar };
    console.log("post");
    console.log(book);
    books.push(book);
    response.json({ payload: books });
})

router.delete("/:id", function(request, response) {
    const id = +request.params.id;
    console.log("request.body: " + request.body);
    const index = books.findIndex(b => b.id === id);
    console.log("index:" + index);
    console.log("from delete " + id);
    books.splice(index, 1);
    response.json({ payload: books });
})

router.put("/:id", function(request, response) {
    const { title, rating, price, author, avatar } = request.body;
    const { id } = request.params;
    console.log("PUT query: " + id);
    console.log("title, rating, price: " + title, rating, price);
    let currentBook = books.find(b => b.id == id);
    currentBook.title = title;
    currentBook.author = author;
    currentBook.avatar = avatar;
    currentBook.rating = rating;
    currentBook.price = price;
    response.json({ payload: books });
})

module.exports = router;