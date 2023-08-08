'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Jayprakash Narayan International Airport',
        address: 'Shaheed Pir Ali Khan Marg, Bhatpura village, Sheikhpura, Patna, Bihar 800014',
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indira Gandhi International Airport',
        address: 'No.367, Badam Singh Market NH-8, near shiv murti, Rangpuri, New Delhi, Delhi 110037',
        cityId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chhatrapati Shivaji Maharaj International Airport',
        address: 'Mumbai, Maharashtra 400099',
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mumbai International Airport',
        address: 'Mumbai, Maharashtra 400099',
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
