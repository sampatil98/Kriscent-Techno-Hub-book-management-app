const express = require('express');
const route = express.Router();
const UserRoute = require('./userRouter');
const BooksRouter = require('./booksRouter');

route.use('/api/user', UserRoute);
route.use('/api/Books', BooksRouter);


module.exports = route;