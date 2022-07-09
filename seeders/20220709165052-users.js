'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',
    [
      {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        password: 'john123',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 2,
        name: 'Mary Jane',
        email: 'maryjane@gmail.com',
        password: 'mary123',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 3,
        name: 'Will Smith',
        email: 'willsmith@gmail.com',
        password: 'will123',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
