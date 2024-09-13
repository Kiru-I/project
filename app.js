const express = require('express');
const connection = require('./database/mongoConnection');
const route = require('./routes/beritaRoutes'); // Import route
const authRoutes = require('./middleware/authjwt'); // Import auth routes

connection();
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Public routes (register and login don't require JWT authentication)
app.use('/api', authRoutes);

// Protected routes (apply JWT middleware to only these routes)
app.use('/api/berita', require('./middleware/jwtMiddleware'), route);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
