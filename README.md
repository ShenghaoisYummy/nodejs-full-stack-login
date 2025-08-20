# Full-Stack Authentication System

> A secure, production-ready full-stack web application implementing user authentication with modern technologies and best practices.

## 🚀 Overview

This project demonstrates a complete authentication system built with Node.js, Express, and Vite. It features secure user registration and login functionality with JWT-based authentication, password hashing, and a modern responsive frontend.

## ✨ Features

- 🔐 **Secure Authentication** - JWT-based authentication with HTTP-only cookies
- 🔒 **Password Security** - Bcrypt password hashing with salt rounds
- 🛡️ **CORS Protection** - Configurable Cross-Origin Resource Sharing
- 🎨 **Modern UI** - Responsive design with GSAP animations
- 📱 **Mobile-First** - Optimized for all device sizes
- ⚡ **Fast Development** - Hot reload with Vite and Nodemon
- 🗄️ **JSON Database** - Lightweight file-based storage system
- 🔄 **Real-time Validation** - Client and server-side input validation

## 🛠️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **JSON Web Token (JWT)** - Secure authentication tokens
- **Bcrypt** - Password hashing and salt generation
- **CORS** - Cross-origin resource sharing middleware
- **Nodemon** - Development auto-restart

### Frontend
- **Vite** - Next-generation frontend build tool
- **Vanilla JavaScript** - Pure JS for optimal performance
- **GSAP** - Professional-grade animation library
- **Sass** - Advanced CSS preprocessing
- **Axios** - Promise-based HTTP client

### Development Tools
- **JSON Server** - Mock database for development
- **ESM Modules** - Modern JavaScript module system

## 📋 Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/nodejs-full-stack-login.git
cd nodejs-full-stack-login
```

### 2. Install Dependencies
```bash
# Install all project dependencies
npm run setup
```

### 3. Start Development Environment
```bash
# Start all services concurrently (database, frontend, backend)
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **Database**: http://localhost:3001

## 📖 Detailed Setup

### Individual Service Management

```bash
# Install dependencies for each service
npm run install:frontend
npm run install:backend  
npm run install:database

# Start services individually
npm run start:frontend   # Vite dev server on port 5173
npm run start:backend    # Express server on port 3000
npm run start:database   # JSON server on port 3001
```

## 🔌 API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Body Parameters |
|--------|----------|-------------|----------------|
| POST | `/register` | Register new user | `username`, `password`, `email` |
| POST | `/login` | Authenticate user | `username`, `password` |
| GET | `/profile` | Get user profile | Requires JWT token |
| POST | `/logout` | Logout user | Requires JWT token |

### Example API Calls

```javascript
// Register User
const response = await axios.post('/register', {
  username: 'johndoe',
  password: 'securePassword123',
  email: 'john@example.com'
});

// Login User  
const loginResponse = await axios.post('/login', {
  username: 'johndoe',
  password: 'securePassword123'
});
```

## 🏗️ Project Structure

```
nodejs-full-stack-login/
├── backend/                 # Express.js server
│   ├── src/
│   │   ├── auth/           # Authentication middleware
│   │   ├── utils/          # Helper functions
│   │   ├── login.js        # Login logic
│   │   └── register.js     # Registration logic
│   ├── index.js            # Server entry point
│   └── package.json
├── frontend/               # Vite frontend
│   ├── src/
│   │   ├── animation.js    # GSAP animations
│   │   ├── dom.js          # DOM manipulation
│   │   └── utils.js        # Utility functions
│   ├── index.html
│   ├── index.js            # Main JavaScript
│   ├── index.scss          # Styles
│   └── package.json
├── database/               # JSON server
│   ├── db.json            # User data store
│   └── package.json
└── utils/                 # Shared utilities
    └── src/
        ├── secret.js      # JWT secret management
        └── time.js        # Time utilities
```

## 🔐 Security Features

- **Password Hashing**: Bcrypt with configurable salt rounds
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Server-side validation for all inputs
- **CORS Configuration**: Controlled cross-origin access
- **Environment Variables**: Secure configuration management

## 🚀 Deployment

### Environment Setup
```bash
# Create environment file
cp .env.example .env

# Configure production variables
NODE_ENV=production
JWT_SECRET=your-super-secure-secret-key
PORT=3000
```

### Production Build
```bash
# Build frontend for production
cd frontend && npm run build

# Start production server
cd backend && npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**[Your Name]**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

⭐ **Star this repository if you found it helpful!**

