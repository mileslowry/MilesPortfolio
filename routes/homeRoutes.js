const router = require('express').Router(),
  appController = require('../controllers/appController'),
  homeController = require('../controllers/homeController');


router.get('/', appController.userAnalytics, homeController.landingPage);
router.get('/li', appController.userAnalytics, homeController.landingPage);
router.get('/in', appController.userAnalytics, homeController.landingPage);
router.get('/re', appController.userAnalytics, homeController.landingPage);


module.exports = router;