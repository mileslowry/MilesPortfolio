const router = require('express').Router(),
  blogController = require('../controllers/blogController');

router.get('/', blogController.indexView);

module.exports = router;