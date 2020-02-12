var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/')
  .get(function (req, res, next) {
    if (req.cookies['name']) {
      next()
    }
    res.render('layout', { title: 'Express', partials: { content: 'signIn' } });
  })
  .get(function (req, res, next) {
    const nameCookie = req.cookies['name'];
    res.render('layout', { title: 'Express', partials: { content: 'index' }, nameCookie: nameCookie });
  })
  .post(function (req, res, next) {
    res.cookie('name', req.body.name);
    res.redirect('/');
  });

module.exports = router;