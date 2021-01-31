const router = require('express').Router(),
  appController = require('../controllers/appController'),
  portfolioController = require('../controllers/portfolioController');

router.get('/', portfolioController.indexView);
router.get('/test', portfolioController.indexView);
// router.get('/work/web-development', workController.webDevView);
// router.get('/work/database-design', workController.dataDevView);
// router.get('/work/data-visualization', workController.dataVisView);
// router.get('/work/machine-learning', workController.machineLearnView);


module.exports = router;