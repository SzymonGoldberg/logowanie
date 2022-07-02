var express = require("express"),
  router = express.Router(),
  verifyToken = require('../middlewares/authJWT'),
  {
    signup,
    signin
  } = require("../controllers/auth.controller.js");

router.post("/register", signup, function (req, res) {});

router.post("/login", signin, function (req, res) {});

router.get("/data", verifyToken, function (req, res) {
  if (!req.user) {
    res.status(403)
      .send({
        message: "Invalid JWT token"
      });
  }
  res.status(200).send({
    "games_played" : req.user.games_played,
    "win_games" : req.user.win_games
  })
});

module.exports = router;