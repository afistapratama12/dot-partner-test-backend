'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class password extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      password.belongsTo(models.User)
    }
  };
  password.init({
    websiteUrl: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'website Url is required'
        },
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'password is required'
        },
      }
    },
    UserId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'password',
  });
  return password;
};