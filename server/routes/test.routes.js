const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  res.send('<h1>This is the test page</h1>');
});

module.exports = router;