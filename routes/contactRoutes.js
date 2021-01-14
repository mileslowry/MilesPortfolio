const router = require('express').Router(),
  contactController = require('../controllers/contactController');

router.get('/contact', contactController.contact);
router.post('/contact/send-message', contactController.sendMessage);
router.get('/contact/thanks', contactController.thanks);

module.exports = router;