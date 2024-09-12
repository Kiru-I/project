// Import model Menu
const Menu = require('../models/menuModel');
require('dotenv').config()

const key = process.env.JWT_KEY.toString()
const jwt = require('jsonwebtoken')
// Controller untuk membuat menu baru
exports.tambahMenu = async (req, res) => {
  try {
    const menuBaru = new Menu(req.body); // Data menu dikirimkan melalui body request
    const menuTersimpan = await menuBaru.save();
    res.status(201).json({
      message: 'Menu berhasil ditambahkan',
      menu: menuTersimpan
    });
  } catch (error) {
    res.status(400).json({
      message: 'Gagal menambahkan menu',
      error: error.message
    });
  }
};

// Controller untuk mendapatkan semua menu
exports.getSemuaMenu = async (req, res) => {
  try {
    const semuaMenu = await Menu.find(); // Mengambil semua data menu
    res.status(200).json({
      message: 'Berhasil mendapatkan semua menu',
      data : jwt.sign({
        Menu : semuaMenu
      }, key)
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal mendapatkan menu',
      error: error.message
    });
  }
};

// Controller untuk mendapatkan satu menu berdasarkan ID
exports.getMenuById = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id); // Mengambil menu berdasarkan ID
    if (!menu) {
      return res.status(404).json({
        message: 'Menu tidak ditemukan'
      });
    }
    res.status(200).json({
      message: 'Berhasil mendapatkan menu',
      menu: menu
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal mendapatkan menu',
      error: error.message
    });
  }
};

// Controller untuk mengupdate menu
exports.updateMenu = async (req, res) => {
  try {
    const menuDiupdate = await Menu.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Mengembalikan menu yang sudah di-update
      runValidators: true // Menjalankan validasi berdasarkan schema
    });
    if (!menuDiupdate) {
      return res.status(404).json({
        message: 'Menu tidak ditemukan'
      });
    }
    res.status(200).json({
      message: 'Menu berhasil diupdate',
      menu: menuDiupdate
    });
  } catch (error) {
    res.status(400).json({
      message: 'Gagal mengupdate menu',
      error: error.message
    });
  }
};

// Controller untuk menghapus menu
exports.deleteMenu = async (req, res) => {
  try {
    const menuDihapus = await Menu.findByIdAndDelete(req.params.id);
    if (!menuDihapus) {
      return res.status(404).json({
        message: 'Menu tidak ditemukan'
      });
    }
    res.status(200).json({
      message: 'Menu berhasil dihapus'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal menghapus menu',
      error: error.message
    });
  }
};
