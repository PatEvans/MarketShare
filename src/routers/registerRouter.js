var router = require('express').Router();
var registerController = require("../controllers/registerController");

/**
 * Home router
 */
const registerRouter = () => {
  // Requests to /index
  router.post("/createAccount", registerController.createAccount);

  router.get("/", registerController.index);

  return router;
};

module.exports = registerRouter;

