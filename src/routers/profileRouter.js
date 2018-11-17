var router = require('express').Router();
var profileController = require("../controllers/profileController");

/**
 * Home router
 */
const profileRouter = () => {
  // Requests to /index
  router.use("/editInfo", profileController.editInfo);

  // Requests to /newsfeed
  router.use("/addStock", profileController.addStock);

  router.use("/", profileController.index);

  return router;
};

module.exports = profileRouter;

