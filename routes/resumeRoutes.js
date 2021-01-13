const router = require('express').Router(),
  resumeController = require('../controllers/resumeController');

router.get('/resume', resumeController.index, resumeController.indexView);

module.exports = router;