const pool = require('../config/db');

const createCommentTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS comments (
      id SERIAL PRIMARY KEY,
      post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
      content TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await pool.query(query);
};

const addComment = async (postId, content) => {
  const query = 'INSERT INTO comments (post_id, content) VALUES ($1, $2) RETURNING *';
  const values = [postId, content];
  const res = await pool.query(query, values);
  return res.rows[0];
};

const getCommentsByPostId = async (postId) => {
  const query = 'SELECT * FROM comments WHERE post_id = $1 ORDER BY created_at ASC';
  const values = [postId];
  const res = await pool.query(query, values);
  return res.rows;
};

module.exports = { createCommentTable, addComment, getCommentsByPostId };