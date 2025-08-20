import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// In-memory user storage for demo (replace with database in production)
let users = [
  {
    id: 1,
    username: 'demo',
    password: '$2b$10$vI8aWBnW3fID.ZQ4/zo1G.q1lRps.9cGLcZEiGDMVr5yUP1KUOYTa' // 'password'
  }
];

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed', code: 'METHOD_NOT_ALLOWED' });
  }

  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ 
        message: 'Username and password are required', 
        code: 'MISSING_CREDENTIALS' 
      });
    }

    // Find user
    const user = users.find(u => u.username === username);
    
    if (!user) {
      return res.status(401).json({ 
        message: 'Invalid credentials', 
        code: 'USER_NOT_FOUND' 
      });
    }

    // Compare password
    const isValidPassword = await bcrypt.compare(password, user.password);
    
    if (!isValidPassword) {
      return res.status(401).json({ 
        message: 'Invalid credentials', 
        code: 'INVALID_PASSWORD' 
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user.id, 
        username: user.username 
      },
      JWT_SECRET,
      { 
        expiresIn: '1h' 
      }
    );

    return res.status(200).json({
      message: 'Login successful',
      code: 'SUCCESS',
      token,
      user: {
        id: user.id,
        username: user.username
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ 
      message: 'Internal server error', 
      code: 'SERVER_ERROR' 
    });
  }
}