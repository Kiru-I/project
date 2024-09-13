// Import model Menu
const Berita = require('../models/beritaModel');
require('dotenv').config()
const key = process.env.JWT_KEY.toString()
const jwt = require('jsonwebtoken')

// Controller GET dengan Token
exports.secureGetAllBerita = async (req, res) => {
  const tiket = req.params.token
  const tiket_value = jwt.verify(tiket, key)
  if(tiket_value.name === key) {
      try {
          const semuaBerita = await Berita.findById(tiket_value.id); // Mengambil semua data menu
          res.status(200).json({
            message: 'Berhasil mendapatkan semua berita',
            data : semuaBerita,
          });
        } catch (error) {
          res.status(500).json({
            message: 'Gagal mendapatkan berita',
            error: error.message
          });
        }
      } 
}
// Controller untuk membuat menu baru
exports.Berita = async (req, res) => {
  try {
    const beritaBaru = new Berita(req.body); // Data menu dikirimkan melalui body request
    const beritaTersimpan = await beritaBaru.save();
    res.status(201).json({
      message: 'Berita berhasil ditambahkan',
      berita: beritaTersimpan
    });
  } catch (error) {
    res.status(400).json({
      message: 'Gagal menambahkan berita',
      error: error.message
    });
  }
};

// Controller untuk mendapatkan semua menu
exports.getSemuaBerita = async (req, res) => {
  try {
    const semuaBerita = await Berita.find(); // Mengambil semua data menu
    res.status(200).json({
      message: 'Berhasil mendapatkan semua berita',
      berita: semuaBerita
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal mendapatkan berita',
      error: error.message
    });
  }
};

// Controller untuk mendapatkan satu menu berdasarkan ID
exports.getBeritaById = async (req, res) => {
  try {
    const berita = await Berita.findById(req.params.id); // Mengambil menu berdasarkan ID
    if (!berita) {
      return res.status(404).json({
        message: 'Berita tidak ditemukan'
      });
    }
    res.status(200).json({
      message: 'Berhasil mendapatkan berita',
      berita: menu
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal mendapatkan berita',
      error: error.message
    });
  }
};

// Controller untuk mengupdate menu
exports.updateBerita = async (req, res) => {
  try {
    const beritaDiupdate = await Berita.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Mengembalikan menu yang sudah di-update
      runValidators: true // Menjalankan validasi berdasarkan schema
    });
    if (!beritaDiupdate) {
      return res.status(404).json({
        message: 'Berita tidak ditemukan'
      });
    }
    res.status(200).json({
      message: 'Berita berhasil diupdate',
      berita: beritaDiupdate
    });
  } catch (error) {
    res.status(400).json({
      message: 'Gagal mengupdate berita',
      error: error.message
    });
  }
};

// Controller untuk menghapus menu
exports.deleteBerita = async (req, res) => {
  try {
    const beritaDihapus = await Berita.findByIdAndDelete(req.params.id);
    if (!beritaDihapus) {
      return res.status(404).json({
        message: 'Berita tidak ditemukan'
      });
    }
    res.status(200).json({
      message: 'Berita berhasil dihapus'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal menghapus berita',
      error: error.message
    });
  }
};
