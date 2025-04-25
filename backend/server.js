
const express = require('express');
const crypto  = require('node:crypto');
const app     = express();


const SECRET_KEY = 'iqq6frrvzp2s34m0jr0aa8a8nng7v0a8';

app.use(express.json());



app.get('/chatbase-token', (req, res) => {
  const userId = req.query.userId;
  if (!userId) {
    return res.status(400).json({ error: 'Missing userId' });
  }
 
  const userHash = crypto
    .createHmac('sha256', SECRET_KEY) .update(userId)
    .digest('hex');

  res.json({ user_id: userId, user_hash: userHash });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);});
