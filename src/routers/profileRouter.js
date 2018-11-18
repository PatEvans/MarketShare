var router = require('express').Router();
var profileController = require("../controllers/profileController");

/**
 * Home router
 */
const profileRouter = () => {
  // Requests to /index
  router.get("/editInfo", profileController.editInfo);

  router.post("/addInfo", profileController.addInfo)

  router.post("/login", profileController.login);

  router.get("/logout", profileController.logout);

  router.get("/", profileController.index);

  return router;
};

module.exports = profileRouter;

