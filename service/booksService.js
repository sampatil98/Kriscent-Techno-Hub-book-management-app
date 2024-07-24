const path = require('path');
const { BooksModel } = require('../model/bookModel');


exports.createBook = async function (body, file) {
    try {
        console.log("body", body);
        if (!file) {
            return {
                message: 'Failed',
                error: true,
                errorMessage: 'No file uploaded',
                statusCode: 400,
                data: {}
            };

        }

        const outputDirectory = path.join(__dirname, '../files/output');
        const filePath = path.join(outputDirectory, file.filename);
        console.log("filePath", filePath);

        const newBook = new BooksModel({
            title: body.title,
            author: body.author,
            coverpage: filePath,
            year: body.year
        });
        console.log("newBook", newBook);

        // Save the book document to the database
        const savedBook = await newBook.save();
        console.log('Book created successfully:', savedBook);
        return {
            message: 'Success',
            error: true,
            errorMessage: '',
            statusCode: 400,
            data: {
                msg: 'Book created successfully',
                bookData: savedBook
            }
        };

    } catch (error) {
        return {
            message: 'Failed',
            error: true,
            errorMessage: error.message,
            statusCode: 400,
            data: {}
        };
    }

}

exports.getAllBooks = async function () {
    try {

        const bookData = await BooksModel.find();
        console.log("bookData", bookData);

        return {
            message: 'Success',
            error: true,
            errorMessage: '',
            statusCode: 400,
            data: {
                msg: 'All book Data fetched successfully',
                bookData: bookData
            }
        };

    } catch (error) {
        return {
            message: 'Failed',
            error: true,
            errorMessage: error.message,
            statusCode: 400,
            data: {}
        };
    }

}

exports.getBookById = async function (book_id) {
    try {
        console.log("book_id", book_id);
        const bookData = await BooksModel.findById(book_id);
        console.log("bookData", bookData);

        if (!bookData) {
            return {
                message: 'Failed',
                error: true,
                errorMessage: `No records found for book Id ${book_id}`,
                statusCode: 400,
                data: {}
            };
        }

        return {
            message: 'Success',
            error: false,
            errorMessage: '',
            statusCode: 200,
            data: {
                msg: 'Book found successfully',
                bookData: bookData
            }
        };

    } catch (error) {
        return {
            message: 'Failed',
            error: true,
            errorMessage: error.message,
            statusCode: 400,
            data: {}
        };
    }
};

exports.updateBookById = async (body, book_id) => {
    console.log("body", body);
    console.log("book_id", book_id);
    try {
        let book = await BooksModel.findByIdAndUpdate(book_id, body);
        if (!book) {
            return {
                message: 'Failed',
                error: true,
                errorMessage: `No records found for book Id ${book_id}`,
                statusCode: 400,
                data: {}
            };
        }
        return {
            message: 'Success',
            error: true,
            errorMessage: '',
            statusCode: 400,
            data: {
                msg: 'Book data updated successfully',
                bookData: book
            }
        };
    } catch (err) {
        return {
            message: 'Failed',
            error: true,
            errorMessage: error.message,
            statusCode: 400,
            data: {}
        };
    }
};


exports.deleteBookById = async ( book_id) => {
    console.log("book_id", book_id);
    try {
        let book = await BooksModel.findByIdAndDelete(book_id);
        if (!book) {
            return {
                message: 'Failed',
                error: true,
                errorMessage: `No records found for book Id ${book_id}`,
                statusCode: 400,
                data: {}
            };
        }
        return {
            message: 'Success',
            error: true,
            errorMessage: '',
            statusCode: 400,
            data: {
                msg: 'Book data deleted successfully',
                bookData: book
            }
        };
    } catch (err) {
        return {
            message: 'Failed',
            error: true,
            errorMessage: error.message,
            statusCode: 400,
            data: {}
        };
    }
};
