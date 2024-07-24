const express = require('express')
const router = express.Router();
const  booksController  = require('../controller/booksController');
const {authentication} = require('../middleware/auth')
const multer = require('multer');
const requestSchema = require('../middleware/schema');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'files/upload') 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/v1', upload.single('file'),requestSchema.bookSchema,authentication(['Admin', 'Author']), booksController.createBook);
router.get('/v1', authentication(['Admin', 'Author','Reader']),booksController.getAllBooks);
router.get('/v1/:book_id',authentication(['Admin', 'Author','Reader']),booksController.getBookById);
router.delete('/v1/:book_id',authentication(['Admin']),booksController.deleteBookById);
router.put('/v1/:book_id',authentication(['Admin','Author']),booksController.updateBookById);

module.exports = router 