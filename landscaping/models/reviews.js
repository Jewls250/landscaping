module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("review", {
    userName: {
      type: DataTypes.STRING,
    },
    userComment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
return Review;
