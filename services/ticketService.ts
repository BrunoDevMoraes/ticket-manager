const { Ticket } = require('../models');

export default class TicketService {
  static async getTicketById(id: string) {
    const ticket = await Ticket.findByPk(id);
    if (ticket === null) {
      return false;
    }
    const { event_id, owner_id, status } = ticket;
    return { event_id, owner_id, status }
  }
}