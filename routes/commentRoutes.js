const express = require('express');
const { createComment, fetchComments } = require('../controllers/commentController');
const router = express.Router();

router.post('/', createComment);
router.get('/:postId', fetchComments);

module.exports = router;