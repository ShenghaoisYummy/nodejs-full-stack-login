import bcrypt from 'bcrypt';

// In-memory user storage for demo (replace with database in production)
let users = [
  {
    id: 1,
    username: 'demo',
    password: '$2b$10$vI8aWBnW3fID.ZQ4/zo1G.q1lRps.9cGLcZEiGDMVr5yUP1KUOYTa' // 'password'
  }
];

const SALT_ROUNDS = 10;

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
    const { username, password, email } = req.body;

    if (!username || !password) {
      return res.status(400).json({ 
        message: 'Username and password are required', 
        code: 'MISSING_CREDENTIALS' 
      });
    }

    // Check if user already exists
    const existingUser = users.find(u => u.username === username);
    
    if (existingUser) {
      return res.status(409).json({ 
        message: 'User already exists', 
        code: 'USER_EXISTS',
        username 
      });
    }

    // Validate password strength (optional)
    if (password.length < 6) {
      return res.status(400).json({ 
        message: 'Password must be at least 6 characters long', 
        code: 'WEAK_PASSWORD' 
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Create new user
    const newUser = {
      id: users.length + 1,
      username,
      password: hashedPassword,
      email,
      createdAt: new Date().toISOString()
    };

    // Add user to storage (in production, save to database)
    users.push(newUser);

    return res.status(201).json({
      message: 'User registered successfully',
      code: 'SUCCESS',
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ 
      message: 'Internal server error', 
      code: 'SERVER_ERROR' 
    });
  }
}