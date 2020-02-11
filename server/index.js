const express = require("express");
require("dotenv").config();
const session = require("express-session");
const app = express();
const checkForSession = require("./middlewares/checkForSession")
const { SERVER_PORT, SESSION_SECRET } = process.env

app
  .use(express.json())
  .use(
    session({
      secret: SESSION_SECRET,
      resave: true,
      saveUninitialized: true,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
      }
    })
  )
  .use(checkForSession())

app.listen(SERVER_PORT, () => console.log(`Rodger Rodger on Port ${SERVER_PORT}`));