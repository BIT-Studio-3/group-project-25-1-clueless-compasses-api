import multer from 'multer';
import path from 'path';
import mime from 'mime-types';

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    // If original filename has no extension, get extension from mime type
    const extension = ext || '.' + mime.extension(file.mimetype) || '';
    cb(null, Date.now() + extension);
  },
});

const upload = multer({ storage });

export default upload;