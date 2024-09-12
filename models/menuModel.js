const mongoose = require('mongoose');

// Buat skema Menu Makanan
const menuSchema = new mongoose.Schema({
  JudulBerita: {
    type: String,
    required: true
  },
  TanggalUpload: {
    type: Date,
    required: true
  },
  TanggalDiperbaharui: {
    type: Date,
    required: true
  },
  deskripsi: String,
  PenanggungJawab: {
    type: String,
    required: true
  },
  IsiBerita: {
    type: String,
    required: true
  },
  Img:{
    type: Array,
    required: true
  }
});

// Buat model Menu menggunakan skema di atas
const Menu = mongoose.model('Menu', menuSchema);

// Export model agar bisa digunakan di file lain
module.exports = Menu;