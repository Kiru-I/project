require('dotenv').config()
const mongoose = require('mongoose');

// Define the connection string
const connectionString = process.env.SERVER_URL.toString();

// Create a connection
function connection(){
    mongoose.connect(connectionString)
        .then(() => console.log('Koneksi MongoDB berhasil!'))
        .catch((err) => console.error('Gagal terkoneksi ke MongoDB:', err));
}

// Export the mongoose instance
module.exports = connection;
