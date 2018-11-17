var router = require('express').Router();
var homeController = require("../controllers/homeController");

/**
 * Home router
 */
const homeRouter = () => {
  // Requests to /index
  router.use("/index", homeController.index);

  // Requests to /newsfeed
  router.use("/newsfeed", homeController.newsfeed);

  router.use("/", homeController.index);

  return router;
};

module.exports = homeRouter;

