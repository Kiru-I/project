const express = require('express');
const router = express.Router();
const Menu = require('../models/menuModel')
require('dotenv').config()

const menuController = require('../controllers/menuController'); // Import controller
const jwt = require('jsonwebtoken')
const d_token = require('../middleware/token')

// Route untuk menambahkan menu baru
router.post('/add/:token', menuController.tambahMenu);

// Route untuk mendapatkan semua menu
router.get('/', menuController.getSemuaMenu);

router.get('/t/:token' , async (req, res) => {
    const tiket = req.params.token
    const tiket_value = jwt.verify(tiket, process.env.JWT_KEY.toString())
    if(tiket_value.name === "akusayangpenus") {
        try {
            const semuaMenu = await Menu.findById(tiket_value.id); // Mengambil semua data menu
            res.status(200).json({
              message: 'Berhasil mendapatkan semua menu',
              data : semuaMenu,
            });
          } catch (error) {
            res.status(500).json({
              message: 'Gagal mendapatkan menu',
              error: error.message
            });
          }
        }
        
    }
)

// Route untuk mendapatkan satu menu berdasarkan ID
router.get('/:id', menuController.getMenuById);

// Route untuk mengupdate menu berdasarkan ID
router.put('/:id', menuController.updateMenu);

// Route untuk menghapus menu berdasarkan ID
router.delete('/:id', menuController.deleteMenu);

module.exports = router;
