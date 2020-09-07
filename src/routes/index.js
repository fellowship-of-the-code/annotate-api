const express = require('express')
const router = express.Router()
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://root:docker@mongo:27017/annotations', {authSource: 'admin'})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: 'The server is running' });
})

router.get('healthcheck/', function(req, res) {
  res.status(200).json({ 'message': 'teste'});
});

module.exports = router
