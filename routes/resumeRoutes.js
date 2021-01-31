const router = require('express').Router(),
  appController = require('../controllers/appController'),
  resumeController = require('../controllers/resumeController');

router.get('/', resumeController.index, resumeController.indexView);

module.exports = router;