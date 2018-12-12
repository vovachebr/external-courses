const router = require("express").Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, `${__dirname}/tmp/my-uploads`)
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({ storage: storage });

const books = [
    { id: 1, title: "Гарри Поттер", src: './image/1.jpg', author: 'Джоан Роулинг', rating: 4.5, price: 0, created_at: new Date(2015, 5, 15) },
    { id: 2, title: "Мастер и Маргарита", src: './image/2.jpg', author: 'Михаил Булгаков', rating: 3.5, price: 0, created_at: new Date(2015, 6, 20) },
    { id: 3, title: "Учебник математики", src: './image/3.jpg', author: 'Я', rating: 4, price: 618, created_at: new Date(2015, 2, 17) },
    { id: 4, title: "Путеводитель по России", src: './image/4.jpg', author: 'Крутой путешественник', rating: 5, price: 716, created_at: new Date(2017, 5, 30) },
    { id: 5, title: "Детектив", src: './image/5.jpg', author: 'Дарья Данцова', rating: 4.5, price: 235, created_at: new Date(2018, 3, 20) },
    { id: 6, title: "Руководство по выживанию", src: './image/6.jpg', author: 'Беар Грилз', rating: 5, price: 795, created_at: new Date(2011, 6, 26) },
    { id: 7, title: "Кулинария", src: './image/7.jpg', author: 'Какая-то повариха', rating: 2, price: 0, created_at: new Date(2015, 3, 16) },
    { id: 8, title: "Карта рязанской области", src: './image/8.jpg', author: 'Крутой путешественник', rating: 3, price: 0, created_at: new Date(2018, 9, 5) },
    { id: 9, title: "Обработка изображений", src: './image/9.jpg', author: 'Крутой разрабочик', rating: 5, price: 689, created_at: new Date(2013, 10, 14) },
    { id: 10, title: "Учебник JavaScript", src: './image/10.jpg', author: 'Я', rating: 5, price: 545, created_at: new Date(2018, 4, 17) },
    { id: 11, title: "Война и мир том 1", src: './image/11.jpg', author: 'Лев Толстой', rating: 4.5, price: 465, created_at: new Date(2015, 9, 18) },
    { id: 12, title: "Война и мир том 2", src: './image/12.jpg', author: 'Лев Толстой', rating: 4, price: 0, created_at: new Date(2016, 12, 13) },
    { id: 13, title: "Война и мир том 3", src: './image/13.jpg', author: 'Лев Толстой', rating: 4, price: 476, created_at: new Date(2018, 6, 10) },
];

//all
router.get("/", function(request, response) {
    console.log("from get books");
    const { query, url } = request; //query = request.query
    let resultBooks = books;

    switch (query.filter) {
        case "most-popular":
            resultBooks = resultBooks.filter(b => b.rating >= 4.5);
            break;
        case "recent": //last 2 years
            resultBooks = resultBooks.filter((b) => (new Date().getFullYear() - b.created_at.getFullYear()) <= 2);
            break;
        case "most-popular":
            resultBooks = resultBooks.filter(b => b.price === 0);
            break;
        default:
            break;
    }

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


router.post("/", upload.fields([{ name: 'src', maxCount: 1 }]), function(request, response) {
    const { title, author, rating, price, created_at } = request.body;
    const fileName = request.files.src[0];
    console.log(request.files);
    console.log(fileName);
    const src = `/${title}_${author}${path.extname(fileName.originalname)}`;
    fs.copyFile(fileName.path, `${process.cwd()}/public${src}`, () => {
        console.log(created_at);
        const book = { id: books.length + 1, title, rating, price, author, created_at: new Date(created_at), src };
        console.log("post");
        console.log(book);
        books.push(book);
        response.json({ payload: books });
    });
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
    const { title, rating, price, author, src, created_at } = request.body;
    const { id } = request.params;
    console.log("PUT query: " + id);
    console.log("title, rating, price: " + title, rating, price);
    let currentBook = books.find(b => b.id == id);
    currentBook.title = title;
    currentBook.author = author;
    currentBook.src = src;
    currentBook.rating = rating;
    currentBook.price = price;
    currentBook.created_at = new Date(created_at);
    response.json({ payload: books });
})

module.exports = router;