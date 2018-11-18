var router = require('express').Router();
var profileController = require("../controllers/profileController");

/**
 * Home router
 */
const profileRouter = () => {
  // Requests to /index
  router.get("/editInfo", profileController.editInfo);

  router.post("/login", profileController.login);

  router.post("/createAccount", profileController.createAccount);

  router.use("/", profileController.index);

  return router;
};

module.exports = profileRouter;

