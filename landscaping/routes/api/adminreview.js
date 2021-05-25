const router = require("express").Router();
const passport = require("../../config/passport");
const reviewsController = require("../../controllers/reviewsController");

// Matches with "/api/user"
router.route("/").get(reviewsController.findAll).post(reviewsController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(reviewsController.findById)
  .put(reviewsController.update)
  .delete(reviewsController.remove);

  // router.route("/Login1").post(passport.authenticate("local"), (req, res) => {
  //   res.json(req.user);
  //   console.log(res.json(req.user));
  // });

module.exports = router;
