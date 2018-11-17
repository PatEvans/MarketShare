var router = require('express').Router();
var homeRouter = require('./homeRouter');
/**
 * Top-level router for the app
 */
const mainRouter = () => {
  // Requests to /*
  router.use("/", homeRouter());

  return router;
};

module.exports = mainRouter;