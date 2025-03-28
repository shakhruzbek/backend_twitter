const express = require("express");
const app = express();
const cors = require("cors");

// Importing routes
const userRouter = require("./routes/userRoutes");
const photoRouter = require("./routes/photoRoutes");
const likeRouter = require("./routes/likeRouter");
const { sinov } = require("./middleware/test");
const { createPost } = require("./controllers/postController");
const { createComment } = require("./controllers/commentController");
const { getUsers } = require("./controllers/likeController");

// Middleware
app.use(express.json());
app.use(cors());
app.use(sinov);

// Calling routes
app.use('/', userRouter);
app.use('/photos', photoRouter)
app.use('/', likeRouter)
app.use('/posts', createPost);
app.use('/comments', createComment);
app.use('/', getUsers)

const port = 4001;
app.listen(port, () => {
  console.log(`Server ${port}-portda ishladi`);
});
