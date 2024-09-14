const express = require('express');
const router = express.Router();
const Berita = require('../models/beritaModel')
require('dotenv').config()
const key = process.env.JWT_KEY.toString()
const cors = require("cors")

const beritaController = require('../controllers/beritaController'); // Import controller
const jwt = require('jsonwebtoken')
const d_token = require('../middleware/token');
const corsOptionsDelegate = require('../middleware/cors.config');

// AMAN
// Mendapatkan Berita dengan ID
router.get('/t-id/:token' , cors(corsOptionsDelegate) , beritaController.secureGetBeritaById)

// Mendapatan Semua Berita
router.get('/t-all/:token', cors(corsOptionsDelegate) , beritaController.secureGetAllBerita)



// GA AMAN
// Route untuk menambahkan menu baru
router.post('/add/:token', cors(corsOptionsDelegate) , beritaController.Berita);

// Route untuk mendapatkan semua menu
router.get('/', cors(corsOptionsDelegate) , beritaController.getSemuaBerita);



// Route untuk mendapatkan satu menu berdasarkan ID
router.get('/:id', cors(corsOptionsDelegate) , beritaController.getBeritaById);

// Route untuk mengupdate menu berdasarkan ID
router.put('/:id', cors(corsOptionsDelegate) , beritaController.updateBerita);

// Route untuk menghapus menu berdasarkan ID
router.delete('/:id', cors(corsOptionsDelegate) ,  beritaController.deleteBerita);

module.exports = router;
