const router = require("express").Router();
const postRoutes = require("./reviews");
const adminRoutes = require("./adminreview");

// Post routes
router.use("/reviews", postRoutes);

router.use("/adminreviews", adminRoutes);

module.exports = router;
