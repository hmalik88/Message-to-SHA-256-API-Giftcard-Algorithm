const express = require('express');
const router = express.Router();
const CryptoJS = require('crypto-js');
const hashes = {};

router.post('/messages', (req, res, next) => {
  const sha256 = CryptoJS.SHA256(res.message);
  hashes[sha256] = res.message;
  res.status(200).json({
    digest: sha256
  });
})

router.get('/:hash', (req, res, next) => {
  const hash = req.params.hash;
  const message = hashes[hash];
  res.status(200).json({
    message: message
  })
})


module.exports = router;
