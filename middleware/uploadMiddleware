const multer = require('multer');
const path = require('path')

const ketmonStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    if(!file) {
      cb(new Error('File berilmadi'), false)
    }
    cb(null, "uploads")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname)
  },
})

const upload = multer({ storage: ketmonStorage })

const uploadMiddleware = upload.single('photo');

module.exports = uploadMiddleware;
