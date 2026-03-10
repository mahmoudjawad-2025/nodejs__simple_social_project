# Social-Connect API (Node.js & MongoDB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

A Social Networking API built with **Node.js**, **Express**, and **MongoDB**. This project demonstrates clean architecture, advanced document modeling, and production-ready security practices, showcasing a solid foundation in backend development.

---

## 📋 Table of Contents
- [✨ Key Features](#-key-features)
- [🏗️ Technical Architecture](#architecture)
- [🚀 Tech Stack](#-tech-stack)
- [⚙️ Getting Started](#setup)
- [📁 Project Structure](#-project-structure)
- [📘 API Documentation](#-api-documentation)
- [📞 Contact](#-contact)

---

## ✨ Key Features
- **🔐 Secure Authentication**: JWT-based login and registration with hashed passwords (`bcrypt`).
- **️ Data Validation**: Strict and secure input validation using `Joi`.
- **🗄️ NoSQL Modeling**: MongoDB integration via `Mongoose` for scalable, flexible data architecture.
- **�️ Voting System**: Efficient Like/Unlike implementation using atomic Mongoose operators (`$addToSet`, `$pull`).
- **📝 Social Feed**: Complete feature-set for creating posts and nesting comments with recursive population.
- **🔒 Environment Security**: Sensitive credentials safely abstracted via `.env`.

<br>

<a name="architecture"></a>
## 🏗️ Technical Architecture & Highlights
- **Clean modular structure**: Domain-driven folder organization (Auth, User, Post).
- **Global Error Handling**: Centralized middleware to ensure consistent error responses across the entire application.
- **Async Utility**: Custom `asyncHandler` to eliminate `try-catch` boilerplate and ensure robust exception tracking.
- **Visual Logic Segregation**: Clean code layout with logical section dividers for senior-level readability.

<br>

## 🚀 Tech Stack
- **Backend Framework**: Node.js & Express.js
- **Database**: MongoDB & Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT) & bcrypt
- **Security & Validation**: Joi & CORS
- **Tooling**: Dotenv, Nodemon

<br>

<a name="setup"></a>
## ⚙️ Getting Started
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd nodejs_monogo
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**
   Rename `.env.example` to `.env` and fill in your connection details:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   SALT_ROUNDS=8
   JWT_SECRET=your_super_secret_key
   JWT_EXPIRES_IN=1h
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```

<br>

## 📂 Project Structure
- `/src/modules`: Contains domain-specific business logic (Auth, User, Post).
- `/src/middlewares`: Reusable REST middlewares (e.g., `auth_mw.js`, `validation_mw.js`).
- `/src/utils`: Core utilities for standardizing responses and error handling.
- `/db`: Database connection pooling and Mongoose models.
- `/docs`: Project documentation and API specifications.

<br>

## 📘 API Documentation
Detailed documentation for all API endpoints can be found in the [API Document](docs/api_document.md).

<br>

## 📞 Contact

- 📧 **Email**: [mahmoudjawad02025@gmail.com](mailto:mahmoudjawad02025@gmail.com)
- 💻 **GitHub Profile**: [@mahmoudjawad-2025](https://github.com/mahmoudjawad-2025/)
- 💼 **LinkedIn:** [linkedin.com/in/mahmoud-abu-alsebaa](https://linkedin.com/in/mahmoud-abu-alsebaa)
