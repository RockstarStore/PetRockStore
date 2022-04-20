const db = require("../models/userModel");

module.exports = {
  async createUser(req: any, res: any, next: any) {
    try {
      const { username, password } = req.body;
      const userQuery: string =
        "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *";
      const result: any = await db.query(userQuery, [username, password]);
      res.locals.createUser = result.rows;
      return next();
    } catch (err) {
      return next({
        log: "createUser controller had an error",
        status: 418,
        message: { err: "An error occurred when creating a new user" },
      });
    }
  },
  async verifyUser(req: any, res: any, next: any) {
    try {
      const { username, password } = req.body;
      const verifyQuery: string =
        "SELECT username, password from users WHERE username = $1 AND password = $2";
      const result: any = await db.query(verifyQuery, [username, password]);
      res.locals.verified = result.rows.length ? true : false;
      return next();
    } catch (err) {
      return next({
        log: "verifyUser controller had an error",
        status: 418,
        message: { err: "An error occurred when verifying a user" },
      });
    }
  },
};
