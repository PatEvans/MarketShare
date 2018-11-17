var router = require('express').Router();
var profileController = require("../controllers/profileController");

/**
 * Home router
 */
const profileRouter = () => {
  // Requests to /index
  router.use("/editInfo", profileController.editInfo);

  router.use("/", profileController.index);

  return router;
};

module.exports = profileRouter;

