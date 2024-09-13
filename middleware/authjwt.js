// authjwt.js

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = express.Router(); // Use express Router instead of app

const SECRET_KEY = 'akusayangpenus'; // Secret key for signing JWT tokens

// Simulated user database
const users = [];

// Register route (hashing the password)
router.post('/register', async (req, res) => {x``
  const { username, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the user to the database (in this case, a simple array)
  const newUser = { username, password: hashedPassword };
  users.push(newUser);

  res.status(201).send('User registered successfully');
});

// Login route (generating the JWT token)
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database
  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(400).send('User not found');
  }

  // Compare the provided password with the hashed password in the database
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).send('Invalid password');
  }

  // Create a JWT token
  const token = jwt.sign({ username: user.username }, SECRET_KEY, {
    expiresIn: '1h', // Token expires in 1 hour
  });

  res.json({ message: 'Login successful', token });
});

// Protected route (requires a valid JWT token)
router.get('/protected', (req, res) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  // Verify the token
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).send('Invalid token');
    }

    res.send(`Welcome, ${decoded.username}! You have access to this protected route.`);
  });
});

// Export the router
module.exports = router;
