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

//compare encrypted with plain password
User.prototype.comparePassword = function (pass, cb) {
  bcrypt.compare(pass, this.password, function (err, isMatch) {
    if (err) {
      return cb(null, false);
    }
  });
};

module.exports = User;