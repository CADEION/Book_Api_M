const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = req.query.page_size ? parseInt(req.query.page_size) : 5;
    const sortBy = req.query.sort_by || 'title';
    const sortOrder = req.query.sort_order === 'desc' ? -1 : 1;
    const search = req.query.search || '';

    if (page < 1 || pageSize < 1) {
      return res.status(400).json({ message: 'Invalid page or pageSize' });
    }

    // Build filter object
    let filter = {};
    if (search) {
      filter = {
        $or: [
          { author: { $regex: search, $options: 'i' } },
          { title: { $regex: search, $options: 'i' } },
          { genre: { $regex: search, $options: 'i' } }
        ]
      };
    }

    const totalBooks = await Book.countDocuments(filter);

    const books = await Book.find(filter)
      .sort({ [sortBy]: sortOrder })
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.json({
      total: totalBooks,
      page,
      pageSize,
      books,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

module.exports = router;