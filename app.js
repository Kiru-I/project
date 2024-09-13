const express = require('express');
const connection = require('./database/mongoConnection')
const menu_route = require('./routes/menuRoutes'); // Import route
const helmet = require("helmet")

// app.use(helmet())

connection();
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Gunakan route menu
app.use('/api/menu', menu_route);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
