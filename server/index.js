const express = require("express");
require("dotenv").config();
const session = require("express-session");
const app = express();
const { SERVER_PORT, SESSION_SECRET } = process.env

const { login, register, signout, getUser } = require("./controllers/authController");
const checkForSession = require("./middlewares/checkForSession")
const read = require("./controllers/swagController")

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
  .use(checkForSession)
  .get("/api/swag", read)
  .post("/api/login", login)
  .post("/api/register", register)
  .post("/api/signout", signout)
  .get("/api/user", getUser)


app.listen(SERVER_PORT, () => console.log(`Rodger Rodger on Port ${SERVER_PORT}`));