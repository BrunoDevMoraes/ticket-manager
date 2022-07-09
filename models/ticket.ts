'use strict';
import {
  Model,
  InferAttributes,
  InferCreationAttributes
} from 'sequelize';

module.exports = (sequelize: any, DataTypes: any) => {
  class Ticket extends Model<InferAttributes<Ticket>, InferCreationAttributes<Ticket>> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    declare id: number;
    declare hash: string;
    declare event_id: number;
    declare owner_id: number;
    declare status: boolean;
    static associate(models: any) {
      Ticket.belongsTo(models.Event, { as: 'event', foreignKey: 'event_id' });
      Ticket.belongsTo(models.User, { as: 'user', foreignKey: 'owner_id' });
    }
  }
  Ticket.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    hash: DataTypes.STRING,
    event_id: DataTypes.INTEGER,
    owner_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};