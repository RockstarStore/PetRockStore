const db = require("../models/userModel");

export {};

module.exports = {
    async getRock(req: any, res: any, next: any) {
        try {
            const { id } = req.params; 
            const getRockQuery: string = "SELECT * FROM rock WHERE id = $1";

            const result: any = await db.query(getRockQuery, [id])
            res.locals.getRock = result.rows.length ? result.rows : null; 
            
            return next();
        } catch (err) {
          return next({
            log: "getRock controller had an error",
            status: 418,
            message: { err: "An error occurred when retrieving rock" },
          });
        }
    },
    
    async getRocks(req: any, res: any, next: any) {
      try {
        const getQuery: string = "SELECT * FROM rock";
        const result: any = await db.query(getQuery);
        res.locals.getRocks = result.rows.length ? result.rows : null; 
        return next();

      } catch (err) {
        return next({
          log: "getRocks controller had an error",
          status: 418,
          message: { err: "An error occurred when retrieving all rocks" },
        });
      }
    }
};