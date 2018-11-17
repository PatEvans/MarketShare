var router = require('express').Router();
var profileRouter = require('./profileRouter');
var newsRouter = require('./newsRouter');
var stockRouter = require('./stockRouter');
/**
 * Top-level router for the app
 */
const mainRouter = () => {
  // Requests to /*
  router.use("/profile", profileRouter());
  router.use("/newsfeed", newsRouter());
  router.use("/stock", stockRouter());

  router.use("/", profileRouter());

  return router;
};

module.exports = mainRouter;