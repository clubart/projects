var express = require('express');
var router = express.Router();

let contacts = [
  {
    id: 1,
    firstName: 'Donald',
    lastName: 'Trump',
    phone: '11234567',
    email: 'dtrump@whitehouse.gov'
  },
  {
    id: 2,
    firstName: 'Mike',
    lastName: 'Pence',
    phone: '565465464',
    email: 'mpence@whitehouse.gov'
  }
]

/* GET home page. */
router.get('/contacts', function (req, res, next) {
  res.render('index', { title: 'My Contacts', contacts: contacts });
});

router.route('/editContact/:id')
  .get(function (req, res, next) {
    const contact = contacts.find(c => c.id === +req.params.id);
    res.render('editContact', { title: 'Edit Contacts', contact: contact });
  }).post(function (req, res, next) {
    contacts.map(c => {
      if(c.id === +req.params.id){
        c.firstName = req.body.firstName;
        c.lastName = req.body.lastName;
        c.email = req.body.email;
        c.phone = req.body.phone;
      }
    });
    res.redirect('/contacts');
  });

router.get('/api/contacts', function (req, res, next) {
  res.send({ contacts: contacts });
});

module.exports = router;
