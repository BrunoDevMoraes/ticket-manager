'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',
    [
      {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        password: '$2a$04$69bugOzJN.nwPO0QHLLQDuZCGxOOfLUOfJzVlIoZrW.4SLpapHRXi', // john123
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 2,
        name: 'Mary Jane',
        email: 'maryjane@gmail.com',
        password: '$2a$04$C6of1LLSQ//jYUqsfc98g.Ts26S4SwcMnwqIQSZlg3uLoZeM7TUj6', // mary123
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 3,
        name: 'Will Smith',
        email: 'willsmith@gmail.com',
        password: '$2a$04$9ij0PGzFrZvVYR2MOdj7Xes49.coTrskMsfDDM21F0Wwzz.4b9U8i', // will123
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
