const { Ticket, Event } = require('../models');

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

  static async updateTicket(owner_id: string, id: string) {
    const ticket = await Ticket.update({ owner_id }, { where: { id } });
    if (ticket[0] === 0) {
      return false;
    }
    return { message: 'Ticket owner update' };
  }

  static async createTickets(info: { owner_id: string, event_id: string, amount: number }) {
    const { owner_id, event_id, amount } = info;
    const event = await Event.findByPk(event_id);
    if (event.available_tickets === 0) {
      return [false, { message: `No tickets available` }];
    }
    if (amount > 3) {
      return ['limit', { message: 'You can only buy 3 tickets' }];
    }
    if (event.available_tickets < amount) {
      return [false, { message: `Only ${event.available_tickets} tickets available` }];
    }
    for (let index = 1; index <= amount; index += 1) {
      const ticket = await Ticket.create({ owner_id, event_id, status: true });
    }
    const newAvailable = event.available_tickets - amount;
    await Event.update({ available_tickets: newAvailable }, { where: { id: event_id } });
    return [true, { message: 'Tickets bought successfully' }];
  }
}