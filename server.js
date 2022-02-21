require("dotenv").config();

const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const BnetStrategy = require("passport-bnet").Strategy;

const PORT = process.env.PORT || 5000;
const BNET_ID = process.env.BNET_OAUTH_CLIENT_ID;
const BNET_SECRET = process.env.BNET_OAUTH_CLIENT_SECRET;
const DOMAIN = process.env.DOMAIN;
const OAUTH_CALLBACK_URL =
  process.env.OAUTH_CALLBACK_URL ||
  `${DOMAIN}:${PORT || 5000}/oauth/battlenet/callback`;
// Review full list of available scopes here: https://develop.battle.net/documentation/guides/using-oauth
const OAUTH_SCOPES = process.env.OAUTH_SCOPES || "wow.profile";

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Register the BnetStrategy within Passport.
passport.use(
  new BnetStrategy(
    {
      clientID: BNET_ID,
      clientSecret: BNET_SECRET,
      scope: OAUTH_SCOPES,
      callbackURL: OAUTH_CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
        return done(null, profile);
      });
    }
  )
);

const app = express();

// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: `${DOMAIN}:3000`, // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);

// configure Express
app.use(cookieParser());
app.use(
  session({
    secret: "passport-battlenet-example", // Change this value to a unique value for your application!
    saveUninitialized: true,
    resave: true,
  })
);

// Initialize Passport! Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.get("/oauth/battlenet", passport.authenticate("bnet"));

app.get(
  "/oauth/battlenet/callback",
  passport.authenticate("bnet", {
    failureRedirect: `${DOMAIN}:3000/`,
  }),
  function (req, res) {
    res.redirect(`${DOMAIN}:3000/`);
  }
);

app.get("/api", function (req, res) {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.json("Logged out");
  }
});

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect(`${DOMAIN}:3000/`);
});

app.use(function (err, req, res, next) {
  console.error(err);
  res.send("<h1>Internal Server Error</h1>");
});

const server = app.listen(PORT || 5000, function () {
  console.log("Listening on port %d boyo", server.address().port);
});

// ---------------- ADD THIS ----------------
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
// --------------------------------

app.use("/", indexRouter);

// ---------------- ADD THIS ----------------
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
// --------------------------------
