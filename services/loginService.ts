const { User } = require('../models');
const Bcrypt = require('bcryptjs');
import Token from '../utils/Token';

export default class LoginService {
  static async postLogin(info: { email: 'string', password: 'string' }) {
    const user = await User.findOne({ where: { email: info.email } });
    if (user === null) {
      return false;
    }
    const status = Bcrypt.compareSync(info.password, user.password);
    if (status === false) {
      return false;
    }
    const { id, email, name } = user;
    const payload = { id, email, name };
    const token = Token.create(payload);
    return {
      user: payload,
      token,
    };
  }
}