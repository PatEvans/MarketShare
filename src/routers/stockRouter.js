var router = require('express').Router();
var stockController = require("../controllers/stockController");

/**
 * Home router
 */
const stockRouter = () => {
  // Requests to /index
  router.use("/create", stockController.create);

  return router;
};

module.exports = stockRouter;

