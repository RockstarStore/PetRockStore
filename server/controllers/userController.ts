const db = require('../models/userModel');

module.exports = {
  async checkUsername(req: any, res: any, next: any) {
    try {
      const { username } = req.body;
      const checkUserQuery: string =
        'SELECT username from users WHERE username = $1';
      const result: any = await db.query(checkUserQuery, [username]);
      res.locals.userExists = result.rows.length;
      return next();
    } catch (err) {
      return next({
        log: 'checkUser controller had an error',
        status: 418,
        message: {
          err: 'An error occurred when checking for an existing user',
        },
      });
    }
  },
  async createUser(req: any, res: any, next: any) {
    if (res.locals.userExists) return next();
    try {
      const { username, password } = req.body;
      const userQuery: string =
        'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING username';
      const result: any = await db.query(userQuery, [username, password]);
      res.locals.username = result.rows;
      return next();
    } catch (err) {
      return next({
        log: 'createUser controller had an error',
        status: 418,
        message: { err: 'An error occurred when creating a new user' },
      });
    }
  },
  async verifyUser(req: any, res: any, next: any) {
    try {
      const { username, password } = req.body;
      const verifyQuery: string =
        'SELECT username, id from users WHERE username = $1 AND password = $2';
      const result: any = await db.query(verifyQuery, [username, password]);
      console.log(result);
      res.locals.username = result.rows;
      res.locals.verified = result.rows.length ? true : false;
      return next();
    } catch (err) {
      return next({
        log: 'verifyUser controller had an error',
        status: 418,
        message: { err: 'An error occurred when verifying a user' },
      });
    }
  },
};
