// const pool = require('../config/db');

// const createPostTable = async () => {
//   const query = `
//     CREATE TABLE IF NOT EXISTS posts (
//       id SERIAL PRIMARY KEY,
//       content TEXT NOT NULL,
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     );
//   `;
//   await pool.query(query);
// };

// const addPost = async (content) => {
//   const query = 'INSERT INTO posts (content) VALUES ($1) RETURNING *';
//   const values = [content];
//   const res = await pool.query(query, values);
//   return res.rows[0];
// };

// const getAllPosts = async () => {
//   const query = 'SELECT * FROM posts ORDER BY created_at DESC';
//   const res = await pool.query(query);
//   return res.rows;
// };

// module.exports = { createPostTable, addPost, getAllPosts };