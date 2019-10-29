const express = require('express');
const router = express.Router();
const hash = {};

router.post('/messages', (req, res, next) => {
  res.status(200).json({
    message: 'Returning digest'
  });
})

router.get('/:hash', (req, res, next) => {
  res.status(200).json({
    message: 'Return message'
  })
})


module.exports = router;
