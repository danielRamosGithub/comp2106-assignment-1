var express = require('express');
var router = express.Router();

/* GET About Me Page. */
router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About Me' });
});

/* GET Projects Page. */
router.get('/projects', (req, res, next) => {
  res.render('projects', { title: 'Projects' });
});

/* GET Services Page. */
router.get('/services', (req, res, next) => {
  res.render('services', { title: 'Services' });
});

/* GET home page. */
router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact Me' });
});

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
