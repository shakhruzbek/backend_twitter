const express = require("express");
const { like } = require("../controllers/likeController");
const likeRouter = express.Router();

likeRouter.post('/like', like);

module.exports = likeRouter;