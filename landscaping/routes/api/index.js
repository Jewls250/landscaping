const router = require("express").Router();
const postRoutes = require("./reviews");
// const userRoutes = require("./adminreview");
const passport = require("passport");

// Post routes
router.use("/reviews", postRoutes);

router.use("/user", userRoutes);

module.exports = router;
