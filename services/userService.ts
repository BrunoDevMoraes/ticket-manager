const { User } = require('../models');

export default class UserService {
  static async getUserById(id: string) {
    const user = await User.findByPk(id);
    if (user === null) {
      return false;
    }
    const { name, email } = user;
    return { name, email }
  }
}