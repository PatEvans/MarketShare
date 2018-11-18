var express = require('express');
var cookieParser = require('cookie-parser');
var dotenv = require('dotenv');
var path = require('path');
var morgan = require('morgan');
var mainRouter = require('./routers/mainRouter');
var dbConn = require('typeorm');
var EntitySchema = dbConn.EntitySchema;


// Load environment variables from .env file
dotenv.config({ path: ".env" });

const build = (callback) => {
  const app = expressSetup();

  middlewareSetup(app);

  // Routes set up
  app.use("/", mainRouter());

  // Connecting to database
  dbConn.createConnection({
    type: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    entities: [
      new EntitySchema(require("./db/Friends")),
      new EntitySchema(require("./db/Order")),
      new EntitySchema(require("./db/Portfolio")),
      new EntitySchema(require("./db/User"))
    ]
  }).then(connection => {
    console.log("  Connection to database (" + connection.name + ") established.");
    return callback(app);
  }).catch(err => {
    console.error("  Could not connect to database");
    console.error(err);
    return callback(app, err);
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
    
  app.use(cookieParser())
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

module.exports = { build };