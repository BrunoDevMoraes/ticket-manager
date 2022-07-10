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
    const tickets = await Ticket.findAll({ where: { owner_id: id },
      attributes: { exclude: ['hash'] } });
    if (tickets.length === 0) {
      return false;
    }
    return tickets;
  }

  static async getTicketsByEventId(id: string) {
    const tickets = await Ticket.findAll({ where: { event_id: id },
      attributes: { exclude: ['hash'] } });
    if (tickets.length === 0) {
      return false;
    }
    return tickets;
  }

  static async updateEvent(owner_id: string, id: string) {
    const ticket = await Ticket.update({ owner_id }, { where: { id } });
    if (ticket[0] === 0) {
      return false;
    }
    return { message: 'Ticket owner update' };
  }
}