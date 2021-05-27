let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/landscapingdb", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

let adminSeed = [
  {
    email: "email@email.com",
    password: "password",
  },
];
let reviewSeed = [
  {
    userName: "email@email.com",
    userComment: "best",
    rating: 5,
  },
  {
    userName: "email@email.com",
    userComment: "worst",
    rating: 1,
  },
  {
    userName: "email@email.com",
    userComment: "better",
    rating: 4,
  },
  {
    userName: "email@email.com",
    userComment: "ok",
    rating: 3,
  },

];
db.User.deleteMany({})
  .then(() => db.User.insertMany(adminSeed))
  .then(data => {
    console.log(data.result + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
db.Review.deleteMany({})
  .then(() => db.Review.insertMany(reviewSeed))
  .then(data => {
    console.log(data.result + " again records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
