# Express Backend Template with JWT Auth

A clean, scalable starter template for backend projects using **Node.js**, **Express**, and **JWT authentication** — built for speed, structure, and security.

---

## Features

✅ Structured project architecture  
✅ JWT-based authentication (login & protected routes)  
✅ Environment-based config management  
✅ Middleware for errors, auth, and logging  
✅ Modular routing and controller pattern  
✅ Ready-to-use `User` model (MongoDB)  
✅ Built-in input validation  
✅ Easily extendable for any backend API

---

## Project Structure

```yaml
/
├── config/ # App & DB config (env, connection setup)
├── controllers/ # Route handlers (business logic)
├── middleware/ # Auth, error handling, and custom middleware
├── models/ # Mongoose models (e.g., User)
├── routes/ # Modular API route definitions
├── utils/ # Utility functions (e.g., token generation)
├── .env.example # Sample environment variables
├── server.js # Entry point of the application
└── README.md
```

---

## Authentication Overview

- Users authenticate via email/password
- JWT token is issued on login
- Protected routes validate JWT before granting access

---

## Built With

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **jsonwebtoken**
- **dotenv**
- **bcryptjs**
- (Optional: Add any others used)

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

2. Install dependencies
```bash
npm install
```

4. Setup environment variables
Copy .env.example to .env and fill in the values:
```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

5. Run the app
```bash
npm run dev
```

Server will start at: http://localhost:5000

## API Endpoints
Auth
POST /api/auth/register – Register a new user

POST /api/auth/login – Login and receive JWT

User (Protected)
GET /api/user/profile – Get user details (requires JWT)

More routes can be added easily following the same pattern.

## Extend This Template
Add other models (e.g., Post, Product)

Add roles/permissions

Plug in Redis, PostgreSQL, or other services

Integrate with frontend (React, Vue, etc.)

## Best Practices Followed
Folder separation by concern

Minimal but robust auth flow

Environment-based config

Error and exception handling

Modular design for scalability

## License
This project is open-source and available under the MIT License.

## Author
Maintained by shubhansu-kr
Pull requests, issues, and forks are welcome!
