const express = require('express');
const router = express.Router();
const beritaController = require('../controllers/beritaController'); // Import controller

// Route untuk menambahkan menu baru
router.post('/berita', beritaController.tambahBerita);

// Route untuk mendapatkan semua menu
router.get('/berita', beritaController.getSemuaBerita);

// Route untuk mendapatkan satu menu berdasarkan ID
router.get('/berita/:id', beritaController.getBeritaById);

// Route untuk mengupdate menu berdasarkan ID
router.put('/berita/:id', beritaController.updateBerita);

// Route untuk menghapus menu berdasarkan ID
router.delete('/berita/:id', beritaController.deleteBerita);

module.exports = router;
