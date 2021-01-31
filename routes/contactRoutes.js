const contact = require('../models/contact');

const router = require('express').Router(),
  appController = require('../controllers/appController'),
  contactController = require('../controllers/contactController');

router.get('/', appController.userAnalytics, contactController.contact);
router.post('/send-message', contactController.sendMessage, contactController.redirectView);
router.get('/thanks', contactController.thanks);

module.exports = router;