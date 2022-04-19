const { Pool }: any = require('pg');

const PG_URI: string = 'postgres://bimqfslp:80enGEO3tcWkAlr-TOS4TLJPGKfYmg4K@rajje.db.elephantsql.com/bimqfslp';

const pool: any = new Pool({ connectionString: PG_URI });

module.exports = {
  query: (text: string, params: any, callback: any): any => {
    return pool.query(text, params, callback);
  },
};
