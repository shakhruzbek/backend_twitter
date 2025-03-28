const pool = require("../config/db");

exports.like = async (req, res) => {
  try {
    const { userId, photoId } = req.body;

    // Shu user tomonidan aynan shu photo uchun like bosilganmi?
    const likes = await pool.query(
      `SELECT * FROM likes WHERE userId = ${userId} and photoId = ${photoId}`
    );

    // Agar like bosilgan bo'lsa, o'chirib tashlaymiz
    if (likes.rows.length > 0) {
      const deleteLike = await pool.query(
        `DELETE FROM likes WHERE userId = ${userId} and photoId = ${photoId}`
      );

      return res.status(200).json({ message: "Like o'chirildi", liked: false });
    }

    // Agar like bosilmagan bo'lsa, like yaratamiz
    const result = await pool.query(
      `INSERT INTO likes VALUES (${userId}, ${photoId}) returning *;`
    );

    res.status(201).json({ message: "Like qilindi", liked: true });
  } catch (error) {
    console.log(error);
    res.status(500).send("Girigitton kodida nomaqbul hatolik mavjud");
  }
}

exports.getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM USERS");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Serverda xato yuz berdi");
  }
}