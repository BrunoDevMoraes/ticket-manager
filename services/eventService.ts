const { User, Event } = require('../models');

export default class EventService {
  static async getAllEvents() {
    const users = await Event.findAll({ include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      } ]});
    return users;
  }

  static async getEventsByOrganization(organization: string) {
    const users = await Event.findAll({ where: { organization }, include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      } ]});
    return users;
  }

  static async getEventById(id: string) {
    const event = await Event.findByPk(id, { include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      } ]});
      if (event === null) {
        return false;
      }
    return event;
  }

  static async createEvent(info: {
    name: string,
    max_tickets: number,
    available_tickets: number,
    ticket_price: number,
    organization: string,
    creator_id: number,
    datetime: string,
    place: string }) {
    const { name,
      max_tickets,
      available_tickets,
      ticket_price,
      organization,
      creator_id,
      datetime,
      place } = info;
    const event = await Event.create({ name,
      max_tickets,
      available_tickets,
      ticket_price,
      organization,
      creator_id,
      datetime,
      place });
    return event;
  }

  static async updateEvent(info: { datetime: string, place: string }, id: string) {
    const { datetime, place } = info;
    await Event.update({ datetime, place }, { where: { id } });
    return { message: 'Event update' };
  }
}