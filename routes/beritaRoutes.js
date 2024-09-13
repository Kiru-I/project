const express = require('express');
const router = express.Router();
const Berita = require('../models/beritaModel')
require('dotenv').config()
const key = process.env.JWT_KEY.toString()

const beritaController = require('../controllers/beritaController'); // Import controller
const jwt = require('jsonwebtoken')
const d_token = require('../middleware/token')

// Route untuk menambahkan menu baru
router.post('/add/:token', beritaController.Berita);

// Route untuk mendapatkan semua menu
router.get('/', beritaController.getSemuaBerita);

// Route dengan Secure
router.get('/t/:token' , beritaController.secureGetAllBerita)

// Route untuk mendapatkan satu menu berdasarkan ID
router.get('/:id', beritaController.getBeritaById);

// Route untuk mengupdate menu berdasarkan ID
router.put('/:id', beritaController.updateBerita);

// Route untuk menghapus menu berdasarkan ID
router.delete('/:id', beritaController.deleteBerita);

module.exports = router;
