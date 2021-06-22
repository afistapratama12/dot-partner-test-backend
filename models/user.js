'use strict';

const { genPass } = require('../helper/bcrypt')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.password)
    }
  };
  User.init({
    fullName: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      allowNull : {
        args : false,
        msg : "email / password must be filld"
      },
      validate: {
        isEmail : {
          args : true,
          msg : "must be in email format"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull : {
        args : false,
        msg : `email / password must be filled`
      }
    }
  }, {
    hooks : {
        beforeCreate: (user, option) => {
          user.password = genPass(user.password)
        }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};