var express = require('express');
var dotenv = require('dotenv');
var path = require('path');
var morgan = require('morgan');
var mainRouter = require('./routers/mainRouter')

// Load environment variables from .env file
dotenv.config({ path: ".env" });

const buildApp = () => {
  const app = expressSetup();

  middlewareSetup(app);

  // Routes set up
  app.use("/", mainRouter());

  app.listen(app.get("port"), () => {
    console.log(
      "  App is running at http://localhost:%d in %s mode",
      app.get("port"),
      app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
  });
};

/**
 * Creates an Express app
 */
const expressSetup = () => {
  // Create Express server
  const app = express();

  // view engine setup
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");

  // Express configuration
  app.set("port", process.env.PORT || 3000);
  app.set("env", "dev");

  return app;
};

/**
 * Sets up middleware used by the app
 * @param app The app to set up the middleware for
 */
const middlewareSetup = (app) => {
  app.use(
    express.static(path.join(__dirname, "public"),
      { maxAge: 31557600000 })
  );

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Request logging
  app.use(morgan("dev"));

  // Disable browser caching
  app.use((req, res, next) => {
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
    res.header("Expires", "-1");
    res.header("Pragma", "no-cache");
    next();
  });
};

buildApp();