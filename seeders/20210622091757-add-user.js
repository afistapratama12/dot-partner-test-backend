'use strict';

const { genPass } = require('../helper/bcrypt')

const users = [{
  fullName : "afista pratama",
  email : "admin@mail.com",
  password : genPass("admin"),
  createdAt : new Date(),
  updatedAt : new Date()
}, {
  fullName : "afista jaya jaya",
  email : "pratama@mail.com",
  password : genPass("admin"),
  createdAt : new Date(),
  updatedAt : new Date()
}]


module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("Users", users, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {})
  }
};
