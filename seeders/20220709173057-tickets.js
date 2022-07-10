'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Tickets',
      [
        {
          id: 1,
          hash: 'firstticket',
          event_id: 1,
          owner_id: 2,
          status: true,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          id: 2,
          hash: 'secondticket',
          event_id: 2,
          owner_id: 3,
          status: true,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Tickets', null, {});
  }
};
