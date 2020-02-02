var express = require('express');
var router = express.Router();

const contacts = [
  {
    firstName: 'Donald',
    lastName: 'Trump',
    phone: '11234567',
    email: 'dtrump@whitehouse.gov'
},
{
    firstName: 'Mike',
    lastName: 'Pence',
    phone: '565465464',
    email: 'mpence@whitehouse.gov'
}
]
/* GET home page. */
router.get('/contacts', function(req, res, next) {
  res.render('index', { title: 'My Contacts', contacts: contacts });
});

router.get('/api/contacts', function(req, res, next) {
  res.send({ contacts: contacts });
});

module.exports = router;
