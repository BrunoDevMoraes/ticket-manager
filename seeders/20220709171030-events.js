'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Events',
      [
        {
          id: 1,
          name: 'University Party',
          max_tickets: 300,
          available_tickets: 299,
          ticket_price: 50.00,
          creator_id: 1,
          organization: 'university',
          datetime: '2022-09-30 18:30:00',
          place: 'Centro Olympo: rua velha, 123, bairro velho',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          id: 2,
          name: 'Company Party',
          max_tickets: 200,
          available_tickets: 199,
          ticket_price: 30.00,
          creator_id: 1,
          organization: 'company',
          datetime: '2022-09-20 20:30:00',
          place: 'Centro Dark: rua nova, 321, bairro novo',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        },
      ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Events', null, {});
  }
};
