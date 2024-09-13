const express = require('express');
const connection = require('./database/mongoConnection')
const berita_route = require('./routes/beritaRoutes'); // Import route
const token_route = require('./routes/tokenRoutes')
const helmet = require("helmet")
const cookieParser = require('cookie-parser')
const cors = require("cors")

connection();
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Gunakan route menu
app.use('/api/berita', berita_route);
app.use('/penus', token_route)

// Mideweh
app.use(helmet())
app.use(cookieParser())
app.use(cors())

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
