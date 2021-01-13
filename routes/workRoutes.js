const router = require('express').Router(),
  workController = require('../controllers/workController');

router.get('/work', workController.indexView);
router.get('/work/web-development', workController.webDevView);
router.get('/work/database-design', workController.dataDevView);
router.get('/work/data-visualization', workController.dataVisView);
router.get('/work/machine-learning', workController.machineLearnView);


module.exports = router;