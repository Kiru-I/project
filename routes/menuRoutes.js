const express = require('express');
const router = express.Router();
const Menu = require('../models/menuModel')
require('dotenv').config()
const key = process.env.JWT_KEY.toString()

const menuController = require('../controllers/menuController'); // Import controller
const jwt = require('jsonwebtoken')
const d_token = require('../middleware/token')

// Route untuk menambahkan menu baru
router.post('/add/:token', menuController.tambahMenu);

// Route untuk mendapatkan semua menu
router.get('/', menuController.getSemuaMenu);

// Route dengan Secure
router.get('/t/:token' , menuController.secureGetAllMenu)

// Route untuk mendapatkan satu menu berdasarkan ID
router.get('/:id', menuController.getMenuById);

// Route untuk mengupdate menu berdasarkan ID
router.put('/:id', menuController.updateMenu);

// Route untuk menghapus menu berdasarkan ID
router.delete('/:id', menuController.deleteMenu);

module.exports = router;
