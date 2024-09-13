const express = require('express');
const connection = require('./database/mongoConnection')
const menu_route = require('./routes/menuRoutes'); // Import route
const token_route = require('./routes/tokenRoutes')
const helmet = require("helmet")

// app.use(helmet())

connection();
const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Gunakan route menu
app.use('/api/menu', menu_route);
app.use('/asld', token_route)

// Jalankan server di port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});