const router = require("express").Router();

router.get("/data", (req, res) => {
  res.json("it works")
});

module.exports = router;
