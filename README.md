 Full-Stack Login and Registration

This project is a full-stack application for user authentication which includes features for user login and registration.

## Technologies Used

- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **JSON Web Token (JWT)**: For securely transmitting information between parties as a JSON object.
- **Bcrypt**: For hashing passwords.
- **Express.js**: Web application framework for Node.js.
- **Prisma**: Next-generation ORM for Node.js and TypeScript.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installing

Clone the repository to your local machine:

```bash
git clone https://github.com/your-repository/fullstack-auth.git

cd toyourfolder

npm run setup
npm run start
```

Endpoints
The following endpoints are available:

POST /register: Register a new user.
POST /login: Login an existing user.
Frontend
The frontend uses Axios for making HTTP requests to the backend, managing login and registration processes.

Backend
The backend is built with Express.js and uses Prisma to interact with the database. Passwords are hashed using Bcrypt, and JWT is used for maintaining user sessions.

Security
This application uses Bcrypt to hash user passwords before saving them to the database and JSON Web Tokens to handle authentication and protect routes.

