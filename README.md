# 📚 Book Repository API

## 🚀 Overview

A simple RESTful API for managing a book repository built with Node.js, Express, Drizzle ORM, and PostgreSQL. This API allows you to perform CRUD operations on book records.

## ✨ Features

- ✅ Create, Read, Update, and Delete books
- ✅ Clean architecture with separate routers, controllers, and services
- ✅ PostgreSQL database with Drizzle ORM
- ✅ RESTful endpoints

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v15 or higher)
- pnpm (v8 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CodeWithMaina/Book-Repository-API.git
   cd book-repository-api
2. **Install Dependencies**
   pnpm install
3. **Set up environment variables**
   cp .env.example .env

3. **Set up environment variables**
   # Create the database (run in your PostgreSQL client)
     CREATE DATABASE book_repository;

   # Run migrations (if using Drizzle migrations)
     pnpm run migrate

4. **Start server with hot-reload**
    pnpm run dev

# 📝 API Endpoints
GET	    /books	Get all books
GET	    /books/:id	Get a single book by ID
POST	/books	Create a new book
PUT	    /books/:id	Update an existing book by ID
DELETE	/books/:id	Delete a book by ID

# 📄 License
MIT

# Happy coding! 💻✨