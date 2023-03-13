const multer = require("multer");
const path = require("path");

const {HttpError} = require("../helpers");

const tmpDir = path.join(__dirname, "..", "..", "tmp");

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tmpDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(HttpError(400, "Invalid File format. Must be PNG,JPG,JPEG"), false);
  }
};


const upload = multer({
  storage: multerConfig,
  fileFilter,
  limits: {
    fileSize: 2000000,
  },
});


module.exports = upload;
