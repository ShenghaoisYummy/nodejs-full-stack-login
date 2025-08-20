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

### Deploy to Vercel (Recommended)

This project is optimized for Vercel deployment with serverless functions.

#### 1. Prepare for Deployment

```bash
# Clone your repository
git clone https://github.com/yourusername/nodejs-full-stack-login.git
cd nodejs-full-stack-login

# Install Vercel CLI globally
npm install -g vercel
```

#### 2. Deploy to Vercel

```bash
# Login to Vercel (first time only)
vercel login

# Deploy to Vercel
vercel

# For production deployment
vercel --prod
```

#### 3. Set Environment Variables

In your Vercel dashboard or via CLI, set:

```bash
# Set environment variables via CLI
vercel env add JWT_SECRET
# Enter your secure JWT secret when prompted

# Or set in Vercel dashboard
# Go to your project → Settings → Environment Variables
```

**Required Environment Variables:**
- `JWT_SECRET`: A secure secret key for JWT token generation

#### 4. Custom Domain (Optional)

```bash
# Add custom domain
vercel domains add yourdomain.com
vercel domains add www.yourdomain.com
```

### Alternative Deployments

#### Manual Production Build
```bash
# Create environment file
cp .env.example .env

# Configure production variables
NODE_ENV=production
JWT_SECRET=your-super-secure-secret-key
PORT=3000

# Build frontend for production
cd frontend && npm run build

# Start production server
cd backend && npm start
```

#### Deploy to Other Platforms

The project structure supports deployment to:
- **Netlify** (with Netlify Functions)
- **Railway**
- **Render**
- **Heroku**

### Vercel Configuration

The project includes:
- `vercel.json` - Vercel configuration
- `/api` directory - Serverless functions
- Automatic build configuration
- Environment variable management

### 📋 Deployment Checklist

Before deploying to production:

- [ ] Set `JWT_SECRET` environment variable
- [ ] Test all API endpoints locally
- [ ] Verify frontend builds successfully (`cd frontend && npm run build`)
- [ ] Update GitHub repository with latest changes
- [ ] Configure custom domain (if needed)
- [ ] Test authentication flow on deployed site

### 🔧 Troubleshooting Deployment

**Common Issues:**

1. **Build Failures**: Ensure all dependencies are in `package.json`
2. **API Errors**: Check environment variables are set correctly
3. **CORS Issues**: Verify API origins in serverless functions
4. **Token Issues**: Ensure `JWT_SECRET` is set and consistent

**Debug Commands:**
```bash
# View deployment logs
vercel logs [deployment-url]

# Check environment variables
vercel env ls
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

