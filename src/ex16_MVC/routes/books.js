const router = require("express").Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const books = require("./books.db");

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, `${__dirname}/tmp/my-uploads`)
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({ storage: storage });

//all
router.get("/", function(request, response) {
    const { query, url } = request; //query = request.query
    let resultBooks = books;

    switch (query.filter) {
        case "most-popular":
            resultBooks = resultBooks.filter(b => b.rating >= 4.5);
            break;
        case "recent": //last 2 years
            resultBooks = resultBooks.filter((b) => (new Date().getFullYear() - b.created_at.getFullYear()) <= 2);
            break;
        case "free":
            resultBooks = resultBooks.filter(b => b.price === 0);
            break;
        default:
            break;
    }

    if (query.match) {
        resultBooks = resultBooks.filter(b => {
            let title = (b.title || "").toLowerCase();
            let author = (b.author || "").toLowerCase();
            let keywords = (b.keywords || []).join(" ").toLowerCase();
            console.log("keywords " + keywords);
            let filter = `${title} ${author} ${keywords}`; //${(b.keywords || []).join(",").toLowerCase()}
            console.log(filter);
            return filter.includes(query.match.toLowerCase());
        });
    }

    response.json({ payload: resultBooks });
})

//one
router.get("/:id", function(request, response) {
    const { id } = request.params;
    response.setHeader('content-type', 'application/json');
    response.json({ payload: books.find(b => b.id == +id) });
})


router.post("/", upload.fields([{ name: 'src', maxCount: 1 }]), function(request, response) {
    const { title, author, rating, price, created_at, keywords } = request.body;
    const bookKeywords = keywords.split(/,| /);
    let src = `./image/no_image.jpg`;
    if (request.files.src) {
        fileName = request.files.src[0];
        src = `/${title}_${author}${path.extname(fileName.originalname)}`;
        fs.copyFile(fileName.path, `${process.cwd()}/public${src}`, () => {
            const book = { id: books.length + 1, title, rating, price, author, created_at: new Date(created_at), src, keywords: bookKeywords };
            books.push(book);
            response.json({ payload: books });
        });
    } else {
        const book = { id: books.length + 1, title, rating, price, author, created_at: new Date(created_at), src, keywords: bookKeywords };
        books.push(book);
        response.json({ payload: books });
    }
})

router.delete("/:id", function(request, response) {
    const id = +request.params.id;
    const index = books.findIndex(b => b.id === id);
    books.splice(index, 1);
    response.json({ payload: books });
})

router.put("/:id", upload.fields([{ name: 'src', maxCount: 1 }]), function(request, response) {
    const { title, rating, price, author, src, created_at, keywords } = request.body;
    const bookKeywords = keywords.split(/,| /);
    const { id } = request.params;
    if (request.files.src) {
        console.log("with file" + id);
        fileName = request.files.src[0];
        let newSrc = `/image/${title}_${author}${path.extname(fileName.originalname)}`;
        fs.copyFile(fileName.path, `${process.cwd()}/public${newSrc}`, () => {
            let currentBook = books.find(b => b.id == id);
            Object.assign(currentBook, { title, author, src: newSrc, rating, price, created_at: new Date(created_at), keywords: bookKeywords });
            response.json({ payload: books });
        });
    } else {
        let currentBook = books.find(b => b.id == id);
        Object.assign(currentBook, { title, author, rating, price, created_at: new Date(created_at), keywords: bookKeywords });
        response.json({ payload: books });
    }
})

module.exports = router;