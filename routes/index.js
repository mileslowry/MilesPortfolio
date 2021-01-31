const app = require('../app');

const router = require('express').Router(),
  contactRoutes = require('./contactRoutes'),
  resumeRoutes = require('./resumeRoutes'),
  portfolioRoutes = require('./portfolioRoutes'),
  blogRoutes = require('./blogRoutes'),
  homeRoutes = require('./homeRoutes');


router.use('/portfolio', portfolioRoutes);
router.use('/blog', blogRoutes);
router.use('/resume', resumeRoutes);
router.use('/contact', contactRoutes);
router.use('/', homeRoutes);

module.exports = router;
