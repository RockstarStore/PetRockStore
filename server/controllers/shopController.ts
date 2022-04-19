const dbUser = require('../models/userModels');

module.exports = {
  async createUser(req: any, res: any, next: any) {
    try {
      const userQuery: string = '';
    } catch (err) {
      return next({
        log: 'createUser controller had an error',
        status: 418,
        message: { err: 'An error occurred when creating a new user' },
      });
    }
  },
};