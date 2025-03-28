const express = require('express');
const { createPost, fetchAllPosts } = require('../controllers/postController');
const router = express.Router();

router.post('/', createPost);
router.get('/', fetchAllPosts);

module.exports = router;