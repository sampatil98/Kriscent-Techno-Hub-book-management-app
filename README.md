# Kriscent-Techno-Hub-book-management-app

This is a simple API for managing books with authentication and authorization.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MongoDB

### Installing

Clone the repository:
bash
git clone https://github.com/sampatil98/Kriscent-Techno-Hub-book-management-app.git
cd Kriscent-Techno-Hub-book-management-app

### nstall the dependencies:

npm install

### Start the application:

node index.js

## API Documentation
The API documentation is available at [deployed server url](https://kriscent-techno-hub-book-management-app.onrender.com/api-docs)

## API Endpoints

### Authentication
POST /api/user/v1/register: Register a new user
POST /api/user/v1/login: Login and get a JWT token
### Books
GET /api/Books/v1: Get all books (requires authentication)
POST /api/Books/v1: Create new book (requires authentication)
PUT /api/Books/v1:book_id: Update a book by ID (requires Admin or Author role)
DELETE /api/Books/:book_id: Delete a book by ID (requires Admin role)
GET /api/Books/v1/:book_id: Get a book by ID (requires authentication)

### Built With

Express - The web framework used
Mongoose - Object Data Modeling (ODM) library for MongoDB and Node.js
JSON Web Token - For authentication and authorization
Swagger - For API documentation

### Author

Sambhaji Dhore 
