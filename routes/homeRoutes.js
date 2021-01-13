const router = require('express').Router(),
  homeController = require('../controllers/homeController');

router.get('/', homeController.landingPage);
router.get('/bio', homeController.viewBio);

module.exports = router;