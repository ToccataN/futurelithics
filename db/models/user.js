const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../index.js");
const bcrypt = require("bcryptjs");

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: `User`,
    timestamps: true,
    createdAt: false,
    updatedAt: "updateTimestamp",
    freezeTableName: true,
  }
);

//compare encrypted with plain password
User.prototype.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

//store password as hash
User.beforeSave((user, options) => {
  if (user.changed("password")) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  }
});

module.exports = User;