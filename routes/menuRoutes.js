const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController'); // Import controller

// Route untuk menambahkan menu baru
router.post('/menu', menuController.tambahMenu);

// Route untuk mendapatkan semua menu
router.get('/menu', menuController.getSemuaMenu);

// Route untuk mendapatkan satu menu berdasarkan ID
router.get('/menu/:id', menuController.getMenuById);

// Route untuk mengupdate menu berdasarkan ID
router.put('/menu/:id', menuController.updateMenu);

// Route untuk menghapus menu berdasarkan ID
router.delete('/menu/:id', menuController.deleteMenu);

module.exports = router;
