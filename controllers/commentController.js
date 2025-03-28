const { addComment, getCommentsByPostId } = require('../models/comment');

const createComment = async (req, res) => {
  try {
    const { postId, content } = req.body;
    if (!postId || !content) return res.status(400).json({ error: 'Post ID and content are required' });
    const newComment = await addComment(postId, content);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const fetchComments = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await getCommentsByPostId(postId);
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createComment, fetchComments };