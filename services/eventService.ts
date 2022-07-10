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
}