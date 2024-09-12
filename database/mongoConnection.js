const mongoose = require('mongoose');

// Define the connection string
const connectionString = 'mongodb+srv://ServerRPL:NodeJSForLife!@belajardatabase.zhfyf.mongodb.net/serverRPL';

// Create a connection
function connection(){
    mongoose.connect(connectionString)
        .then(() => console.log('Koneksi MongoDB berhasil!'))
        .catch((err) => console.error('Gagal terkoneksi ke MongoDB:', err));
}

// Export the mongoose instance
module.exports = connection;
