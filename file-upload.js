const multer = require('multer');
const upload = multer({dest: 'uploads/'});

app.post('/upload'), upload.single('file'), (req, res) => {
  res.send('File uploaded');
});
