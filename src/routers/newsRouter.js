var router = require('express').Router();
var newsController = require("../controllers/newsController");

/**
 * Home router
 */
const newsRouter = () => {
  // Requests to /index
  router.use("/", newsController.index);

  return router;
};

module.exports = newsRouter;

