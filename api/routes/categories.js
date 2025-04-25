var express = require("express");
var router = express.Router();

const isAuthenticated = true;

router.all("*", (req, res, next) => {
  if (isAuthenticated) {
    next();
  } else {
    res.json({ success: false, error: "Not authenticated!" });
  }
});

/*Get users listening */

router.get(
  "/",
  function (req, res, next) {
    //Birinci middleware
    console.log("Loglama yapılıyor");
    next();
  },
  (req, res) => {
    res.json({ success: true });
  }
);

module.exports = router;
