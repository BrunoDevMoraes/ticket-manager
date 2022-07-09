'use strict';

import {
  Model,
  InferAttributes,
  InferCreationAttributes
} from 'sequelize';

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    declare id: number;
    declare name: string;
    declare email: string;
    declare password: string;

    static associate(models: any) {
      User.hasMany(models.Event, { as: 'event', foreignKey: 'creator_id' })
      User.hasMany(models.Ticket, { as: 'ticket', foreignKey: 'owner_id'})
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};