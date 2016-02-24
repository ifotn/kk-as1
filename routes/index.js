var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Katie Kramer\'s Portfolio'});
});
//GET pages
router.get('/about', function(req,res, next) {
  //show about page
  res.render('about', {title: "About"});
});

router.get('/portfolio', function(req,res, next) {
  //show about page
  res.render('portfolio', {title: "Portfolio"});
});

router.get('/services', function(req,res, next) {
  //show about page
  res.render('services', {title: "Services"});
});

router.get('/contact', function(req,res, next) {
  //show about page
  res.render('contact', {title: "Contact"});
});

module.exports = router;
