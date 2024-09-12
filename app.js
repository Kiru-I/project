const express = require('express');
const connection = require('./database/mongoConnection')
const route = require('./routes/beritaRoutes'); // Import route

connection();
const app = express();

// Middleware untuk parsing JSON
app.use(express.json());


// Gunakan route menu
app.use('/api', route);

// Jalankan server di port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});