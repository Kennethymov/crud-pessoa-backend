'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    console.log('here!')
    await queryInterface.bulkInsert('users', [
    {
      name: 'Kennethy Magno Oliveira Valerio',
      email: 'kennethymov@gmail.com',
      bithDate: '1991/10/11',
    },
  ], { });
  },
  
  async down (queryInterface) { queryInterface.bulkDelete('users', null, {}) }
};