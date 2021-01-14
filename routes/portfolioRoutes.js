const router = require('express').Router(),
  portfolioController = require('../controllers/portfolioController');

router.get('/portfolio', portfolioController.indexView);
router.get('/portfolio/test', portfolioController.indexView);
// router.get('/work/web-development', workController.webDevView);
// router.get('/work/database-design', workController.dataDevView);
// router.get('/work/data-visualization', workController.dataVisView);
// router.get('/work/machine-learning', workController.machineLearnView);


module.exports = router;