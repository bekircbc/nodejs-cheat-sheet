const fs = require('fs');
const path = require('path');
const os = require('os')

// reading file
fs.readFile('file.txt', 'utf8', (err, data) => {
  console.log(data);
});

// writing file
fs.writeFile('file.txt', 'Hello Node', () => {});

