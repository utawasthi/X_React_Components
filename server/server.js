const express = require('express');
const multer = require('multer');
const cors = require('cors');


const app = express();
app.use(cors());

const upload = multer({
  dest : 'uploads/'
});

app.post("/uploads" , upload.single('file') , (req , res) => {
  console.log("Uploaded :- " , req.file);
  res.json({
    status : 200,
    fileName : req.file.filename,
  });
});

app.listen(3000 , () => {
  console.log("Server running at port 3000");
});
