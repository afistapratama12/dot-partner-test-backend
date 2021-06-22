'use strict';

const passSeedMock = [{
  websiteUrl : "google.com",
  password : "admin",
  UserId : 1,
  createdAt : new Date(),
  updatedAt : new Date()
}, {
  websiteUrl : "google2.com",
  password : "adminadmin",
  UserId : 1,
  createdAt : new Date(),
  updatedAt : new Date()
}, {
  websiteUrl : "google.com",
  password : "adminadmin",
  UserId : 2,
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
   await queryInterface.bulkInsert('passwords', passSeedMock, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("passwords", null, {})
  }
};
