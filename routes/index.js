'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*', function (req, res, next) {
  var list = ['api']
  var url = req.originalUrl.split('/')
  if(list.indexOf(url[1]) != -1) {
    next();
  } else {
    res.sendfile('views/index.html');
  }
});

module.exports = router;