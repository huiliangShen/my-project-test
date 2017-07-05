/**
 * Created by shl on 2017/7/5.
 */
const express = require('express');
const router = express.Router();
const {api} = require('../config/config');

module.exports = router;

router.post('/getInfo', function (req, res, next) {
  let json = {
    accesstoken: req.body.token
  }
  api('common', 'getInfo', json, req.body.token)
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
});
