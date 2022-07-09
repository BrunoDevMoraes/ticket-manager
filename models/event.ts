'use strict';
import {
  Model,
  InferAttributes,
  InferCreationAttributes
} from 'sequelize';

module.exports = (sequelize: any, DataTypes: any) => {
  class Event extends Model<InferAttributes<Event>, InferCreationAttributes<Event>> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    declare id: string;
    declare name: string;
    declare max_tickets: number;
    declare available_tickets: number;
    declare ticket_price: number;
    declare creator_id: number;
    declare organization: string;
    declare datetime: Date;
    declare place: string;

    static associate(models: any) {
      Event.belongsTo(models.User, { as: 'user', foreignKey: 'creator_id' });
      Event.hasMany(models.Ticket, { as: 'ticket', foreignKey: 'event_id' })
    }
  }
  Event.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    max_tickets: DataTypes.INTEGER,
    available_tickets: DataTypes.INTEGER,
    ticket_price: DataTypes.FLOAT,
    creator_id: DataTypes.INTEGER,
    organization: DataTypes.STRING,
    datetime: DataTypes.DATE,
    place: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};