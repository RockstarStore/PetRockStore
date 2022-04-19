const db = require("../models/userModel");

export {};
module.exports = {
  async getCart(req: any, res: any, next: any) {
    try {
      const { id } = req.params;
      const getQuery: string = "SELECT * FROM cart c INNER JOIN users u ON u.id = c.user_id WHERE user_id = $1";
      const result = await db.query(getQuery, [id]);
      res.locals.getCart = result.rows.length ? result.rows : null;
      return next();
    } catch (err) {
      return next({
        log: "getCart controller had an error",
        status: 418,
        message: { err: "An error occurred when getting cart" },
      });
    }
  },
  async addCart(req: any, res: any, next: any) {
    try {
      const { rock_id, user_id } = req.body;
      const addQuery: string = "INSERT INTO cart (rock_id, user_id) VALUES ($1, $2) RETURNING *";
      const result = await db.query(addQuery, [rock_id, user_id])
      // res.locals.addCart = result.rows.length ? true : false;
      res.locals.addCart = result.rows;
      return next();

    } catch (err) {
      return next({
        log: "addCart controller had an error",
        status: 418,
        message: { err: "An error occurred when adding an item a cart" },
      });
    }
  },
  async deleteCart(req: any, res: any, next: any) {
    try {
      const { id }  = req.params;
      const deleteQuery: string = "DELETE FROM cart WHERE id = $1 RETURNING *";
      const result = await db.query(deleteQuery, [id])
      res.locals.deleted = result.rows;
      return next();

    } catch (err) {
      return next({
        log: "deleteCart controller had an error",
        status: 418,
        message: { err: "An error occurred when removing an item from the cart" },
      });
    }
  },
};
