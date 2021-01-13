const router = require('express').Router(),
  blogController = require('../controllers/blogController');

router.get('/blog', blogController.indexView);

module.exports = router;