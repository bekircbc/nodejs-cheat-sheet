const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.send('Hallo Express');
});

app.listen(3000);
