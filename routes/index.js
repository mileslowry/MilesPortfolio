const router = require('express').Router(),
  contactRoutes = require('./contactRoutes'),
  resumeRoutes = require('./resumeRoutes'),
  portfolioRoutes = require('./portfolioRoutes'),
  blogRoutes = require('./blogRoutes'),
  homeRoutes = require('./homeRoutes');

router.get('/portfolio', portfolioRoutes);
router.get('/blog', blogRoutes);
router.get('/resume', resumeRoutes);
router.get('/contact', contactRoutes);
router.get('/', homeRoutes);

module.exports = router;
