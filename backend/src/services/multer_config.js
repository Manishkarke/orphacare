const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const date = new Date();
    const timestamp = date.getTime();
    const extension = path.extname(file.originalname);
    const imageName = `${timestamp}${extension}`;
    cb(null, imageName);
  },
});

module.exports.upload = multer({ storage: storage });
