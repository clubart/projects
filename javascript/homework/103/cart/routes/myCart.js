var express = require('express');
var router = express.Router();
const Cart = require('../cart');

/* GET home page. */
router.get('/', function (req, res, next) {
    const cart = new Cart(req.session.cart ? req.session.cart.items : null);
    const myCart = cart.getItems();
  res.render('layout', {
    title: 'Express',
    css: ['index'],
    partials: { content: 'myCart' },
    cart: myCart
  });
});

module.exports = router;
