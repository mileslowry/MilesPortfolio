const router = require('express').Router(),
  resumeRoutes = require('./resumeRoutes'),
  workRoutes = require('./workRoutes'),
  blogRoutes = require('./blogRoutes'),
  homeRoutes = require('./homeRoutes');

router.get('/work', workRoutes);
router.get('/blog', blogRoutes);
router.get('/resume', resumeRoutes);
router.get('/', homeRoutes);

module.exports = router;
