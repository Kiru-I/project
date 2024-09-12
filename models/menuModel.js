const mongoose = require('mongoose');

// Buat skema Menu Makanan
const menuSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  harga: {
    type: Number,
    required: true
  },
  kategori: {
    type: String,
    enum: ['Makanan', 'Minuman', 'Camilan'],  
    required: true
  },
  tersedia:{
    type: String,
    required: true
  },
  tanggalDitambahkan:{
    type: Date,
    default: Date.now
  }
});

// Buat model Menu menggunakan skema di atas
const Menu = mongoose.model('Menu', menuSchema);

// Export model agar bisa digunakan di file lain
module.exports = Menu;