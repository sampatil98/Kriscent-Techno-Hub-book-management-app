

const bookService = require('../service/booksService');

async function createBook(req,res){
    console.log("inside createBook controller");
    let body = req.body;
    let file = req.file
    console.log("body",body);
    console.log("fileobject",file);

    try {
        await bookService.createBook(body,file).then(function (result) {
            console.log("result:", result)
            res.status(result.statusCode).send(result);
        })
    } catch (error) {
        console.error("Error in createBook controller:", error);
        res.status(500).send({
            message: 'Failed',
            error: true,
            errorMessage: error.message,
            statusCode: 500,
            data: {}
        });
    }
}

async function getAllBooks(req,res){
    console.log("inside getAllBooks controller");
    try {
        await bookService.getAllBooks().then(function (result) {
            console.log("result:", result)
            res.status(result.statusCode).send(result);
        })
    } catch (error) {
        console.error("Error in getAllBooks controller:", error);
        res.status(500).send({
            message: 'Failed',
            error: true,
            errorMessage: error.message,
            statusCode: 500,
            data: {}
        });
    }
}

async function getBookById(req,res){
    console.log("inside getBookById controller");
    try {
        let {book_id} = req.params;
        await bookService.getBookById(book_id).then(function (result) {
            console.log("result:", result);
            res.status(result.statusCode).send(result);
        })
    } catch (error) {
        console.error("Error in getBookById controller:", error);
        res.status(500).send({
            message: 'Failed',
            error: true,
            errorMessage: error.message,
            statusCode: 500,
            data: {}
        });
    }
}

async function updateBookById(req,res){
    console.log("inside getBookById controller");
    try {
        let {book_id} = req.params;
        let body = req.body;
        console.log("body",body);
        await bookService.updateBookById(body,book_id).then(function (result) {
            console.log("result:", result);
            res.status(result.statusCode).send(result);
        })
    } catch (error) {
        console.error("Error in getBookById controller:", error);
        res.status(500).send({
            message: 'Failed',
            error: true,
            errorMessage: 'Internal Server Error',
            statusCode: 500,
            data: {}
        });
    }
}

async function deleteBookById(req,res){
    console.log("inside deleteBookById controller");
    try {
        let {book_id} = req.params;
        await bookService.deleteBookById(book_id).then(function (result) {
            console.log("result:", result);
            res.status(result.statusCode).send(result);
        })
    } catch (error) {
        console.error("Error in deleteBookById controller:", error);
        res.status(500).send({
            message: 'Failed',
            error: true,
            errorMessage: 'Internal Server Error',
            statusCode: 500,
            data: {}
        });
    }
}

module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBookById,
    deleteBookById
}