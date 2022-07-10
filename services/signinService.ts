const { User } = require('../models');
const Bcrypt = require('bcryptjs');

export default class SigninService {
  static async postSignin(info: { name: 'string', email: 'string', password: 'string' }) {
    const { name, email, password } = info;
    const passwordHash = await Bcrypt.hash(password, 1);
    const user = await User.create({ name, email, password: passwordHash });
    const { id } = user;

    return { id, name, email };
  }
}