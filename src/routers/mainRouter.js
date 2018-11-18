var router = require('express').Router();
var profileRouter = require('./profileRouter');
var newsRouter = require('./newsRouter');
var stockRouter = require('./stockRouter');
var dataRouter = require('./dataRouter');
var registerRouter = require('./registerRouter');

/**
 * Top-level router for the app
 */
const mainRouter = () => {
  // Requests to /*
  router.use("/profile", profileRouter());
  router.use("/newsfeed", newsRouter());
  router.use("/stock", stockRouter());
  router.use("/data", dataRouter());
  router.use("/register", registerRouter());

  router.use("/", profileRouter());

  return router;
};

module.exports = mainRouter;