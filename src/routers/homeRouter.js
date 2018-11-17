var router = require('express').Router();
var homeController = require("../controllers/homeController");

/**
 * Home router
 */
const mainRouter = () => {
  // Requests to /*
  router.use("/", homeController.hello);

  return router;
};

module.exports = mainRouter;

