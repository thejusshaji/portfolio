var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Index' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'services' });
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
module.exports = router;
