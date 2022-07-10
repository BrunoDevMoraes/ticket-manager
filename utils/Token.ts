var jwt = require('jsonwebtoken');
require('dotenv').config();

export default class Token {
  private static secret = process.env.JWT_SECRET;

  static create(payload: object) {
    return jwt.sign(payload, this.secret, { algorithm: 'HS256', expiresIn: '1h' });
  }

  static decode(token: string) {
    return jwt.verify(token, this.secret);
  }
}