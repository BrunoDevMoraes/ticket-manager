const { Ticket } = require('../models');

export default class TicketService {
  static async getTicketById(id: string) {
    const ticket = await Ticket.findByPk(id, { attributes: { exclude: ['hash'] } });
    if (ticket === null) {
      return false;
    }
    return ticket;
  }

  static async getTicketsByOwnerId(id: string) {
    const tickets = await Ticket.findAll({ where: { owner_id: id }, attributes: { exclude: ['hash'] } });
    console.log(tickets);
    if (tickets.length === 0) {
      return false;
    }
    return tickets;
  }
}