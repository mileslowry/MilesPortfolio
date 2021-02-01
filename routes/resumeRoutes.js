const router = require('express').Router(),
  appController = require('../controllers/appController'),
  resumeController = require('../controllers/resumeController');

router.get('/', appController.userAnalytics, resumeController.resume);

module.exports = router;