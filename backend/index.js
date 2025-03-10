const express = require("express");
const session = require("express-session");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();

app.use(
  session({
    secret: "rajan", // Your secret key for session encryption
    resave: false, // Don't force session to be saved back to the session store
    saveUninitialized: true, // Save uninitialized session to the session store
    cookie: { maxAge: 24 * 60 * 60 * 1000 }, // Cookie expiry time
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server is running!");
});
