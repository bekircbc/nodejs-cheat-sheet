const jwt = require('jsonwebtoken');

const token = jwt.sign({ id: 1}, 'secret', { expiresIn: '1h' });

jwt.verify(token, 'secret', (err, decoded) => (
  console.log(decoded);
});
